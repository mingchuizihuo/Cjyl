package com.idea.cjyl.totalmodule.web.controller;

import com.idea.cjyl.core.common.ResultData;
import com.idea.cjyl.totalmodule.web.domain.pojo.Login;
import com.idea.cjyl.totalmodule.web.domain.pojo.OrganizationLogin;
import com.idea.cjyl.totalmodule.web.globals.AnalysisConstant;
import com.idea.cjyl.totalmodule.web.service.LoginService;
import com.idea.cjyl.totalmodule.web.service.OrganizationLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import sun.misc.Contended;
import sun.rmi.log.LogInputStream;

import javax.servlet.http.HttpSession;

/**
 * Created by xiao on 2016/12/11.
 */
@Controller
@RequestMapping("serve/login/")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @Autowired
    private OrganizationLoginService organizationLoginService;
    /**
     * 登陆
     * @param login
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "login",method = RequestMethod.GET)
    public ResultData login(Login login,HttpSession session){
        if(loginService.login(login).getId()==null){
           return  ResultData.build().put("result",false);
        }else{
            login = loginService.login(login);
            session.setAttribute("loginInfo",login);
            return ResultData.build().parseBean(login);

        }


    }

    /**
     * 登出
     * @param session
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "loginOut",method = RequestMethod.GET)
    public ResultData loginOut(HttpSession session){
        session.removeAttribute("loginInfo");
        AnalysisConstant.login = null;
        return ResultData.build().put("result",true);
    }

    /**
     * 模糊查询机构名
     * @param organizationName
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "likeGetOrganizationName",method = RequestMethod.GET)
    public ResultData likeGetOrganizationName(String organizationName){


        return ResultData.build().parseList(organizationLoginService.likeGetOrganizationName(organizationName));
    }

    /**
     * 查询所有
     */
    @ResponseBody
    @RequestMapping(value = "findAllOrganizationName",method = RequestMethod.GET)
    public ResultData findAllOrganizationName(){

        return ResultData.build().parsePageBean(organizationLoginService.findAll(1,1000000));
    }
}
