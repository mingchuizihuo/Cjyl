package com.idea.cjyl.totalmodule.web.controller;

import com.idea.cjyl.core.common.ResultData;
import com.idea.cjyl.core.generic.GenericController;
import com.idea.cjyl.totalmodule.web.domain.pojo.Older;
import com.idea.cjyl.totalmodule.web.service.OlderBriefService;
import com.idea.cjyl.totalmodule.web.service.OlderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
* Created by 10238 on 2016/10/12.
*/
@Controller
@RequestMapping("serve/older")
public class OlderController extends GenericController {
    @Autowired
    private OlderService olderService;
    @Autowired
    private OlderBriefService olderBriefService;

    /**
        * 添加老人
        * @param older
        * @return
    */
    @ResponseBody
    @RequestMapping(value="add" ,method = RequestMethod.POST)
    public ResultData add(Older older){

        try {
                    olderService.insert(older);


            }catch (Exception e){
                return ResultData.build().addErroe();
            }
        return ResultData.build();

    }

    /**
    * 删除老人
    * @param id
    * @return
    */
    @ResponseBody
    @RequestMapping(value="del" ,method = RequestMethod.POST)
    public ResultData del(Long id) {
        try {
                    olderService.delete(id);
            } catch (Exception e) {
                return ResultData.build().delError();
            }
        return ResultData.build();

    }
    /**
    * 批量删除老人
    *
    * @param ids
    * @return
    */
    @ResponseBody
    @RequestMapping(value = "dels", method = RequestMethod.POST)
    public ResultData del(String ids) {
        try {
            String[] idsArray = ids.split(",");
            for (String id : idsArray) {
                olderService.delete(Long.parseLong(id));
            }

            } catch (Exception e) {
                return ResultData.build().delError();
            }
            return ResultData.build();

    }
    /**
    * 修改老人
    * @param older
    * @return
    */
    @ResponseBody
    @RequestMapping(value="update",method = RequestMethod.POST)
    public ResultData update(Older older){
        try {
            olderService.update(older);

        } catch (Exception e){
            return ResultData.build().upDateError();
        }
        return ResultData.build();
    }

    /**
    * 分页查询所有老人
    * @param currentPage
    * @param limit
    * @return
    */
    @ResponseBody
    @RequestMapping(value="findAll",method = RequestMethod.GET)
    public ResultData findAll(Integer currentPage,Integer limit){
        return ResultData.build().
        parsePageBean(olderService.findAll(currentPage,limit));
    }


    /**
     * 分页查询所有老人VO
     * @param currentPage
     * @param limit
     * @return
     */
    @ResponseBody
    @RequestMapping(value="findAllVO",method = RequestMethod.GET)
    public ResultData findAllVO(Integer currentPage,Integer limit){
        return ResultData.build().
                parsePageBean(olderService.findAllVO(currentPage,limit));
    }


    /**\
     * 根据条件分页查询所有老人VO
     * @param older 老人信息
     * @param currentPage
     * @param limit
     * @return
     */
    @ResponseBody
    @RequestMapping(value="findVOByExample",method = RequestMethod.GET)
    public ResultData findVOByExample(Older older,Integer currentPage,Integer limit){
        return ResultData.build().
                parsePageBean(olderService.findVOByExapmle(older,currentPage,limit));
    }


    /**
     * 根据id查询老人VO
     * @param olderId
     * @return
     */
    @ResponseBody
    @RequestMapping(value="findVOById",method = RequestMethod.GET)
    public ResultData findVOById(Long olderId){
        return ResultData.build().
                parseBean(olderService.selectVOByPrimaryKey(olderId));
    }



    /**
     * 分页查询所有老人简要信息VO
     * @param currentPage
     * @param limit
     * @return
     */
    @ResponseBody
    @RequestMapping(value="findAllBriefVO",method = RequestMethod.GET)
    public ResultData findAllBriefVO(Integer currentPage,Integer limit){
        return ResultData.build().
                parsePageBean(olderBriefService.findAllVO(currentPage,limit));
    }


    /**\
     * 根据条件分页查询所有老人简要信息VO
     * @param older 老人信息
     * @param currentPage
     * @param limit
     * @return
     */
    @ResponseBody
    @RequestMapping(value="findAllBriefVOByExample",method = RequestMethod.GET)
    public ResultData findAllBriefVOByExample(Older older,Integer currentPage,Integer limit){
        return ResultData.build().
                parsePageBean(olderBriefService.findVOByExapmle(older,currentPage,limit));
    }
}