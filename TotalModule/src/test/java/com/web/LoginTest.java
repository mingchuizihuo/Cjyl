package com.web;

import SupportTest.SupportTest;
import com.idea.cjyl.totalmodule.web.domain.pojo.Login;
import com.idea.cjyl.totalmodule.web.domain.pojo.OrganizationLogin;
import com.idea.cjyl.totalmodule.web.globals.AnalysisConstant;
import com.idea.cjyl.totalmodule.web.service.LoginService;
import com.idea.cjyl.totalmodule.web.service.OrganizationLoginService;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by xiao on 2016/12/11.
 */
public class LoginTest extends SupportTest {
    @Autowired
    private LoginService loginService;
    @Autowired
    private OrganizationLoginService organizationLoginService;

    @Test
    public void testLogin(){
        Login login = new Login();
        login.setLoginName("admin");
        login.setLoginPassword("123456");
        login.setOrganizationLoginId(1l);

        login = loginService.login(login);
        System.out.println(login);
        System.out.println(AnalysisConstant.login.getId());
    }
}
