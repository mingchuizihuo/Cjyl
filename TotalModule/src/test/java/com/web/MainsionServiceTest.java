package com.web;

import com.idea.cjyl.totalmodule.web.dao.myself.MansionMapperMyself;
import com.idea.cjyl.totalmodule.web.domain.pojo.Mansion;
import com.idea.cjyl.totalmodule.web.service.MansionService;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractJUnit4SpringContextTests;

import javax.annotation.Resource;

/**
 * Created by Administrator on 2016/12/2.
 */
@ContextConfiguration(locations = {"classpath*:/applicationContext-totalmodule.xml"})
public class MainsionServiceTest extends AbstractJUnit4SpringContextTests {
    @Resource
    private MansionService mansionService;



    @Test
    public void testAdd(){
        Mansion mansion = new Mansion();
        mansion.setOrganizationLoginId(1l);
        mansion.setName("一号楼");

        mansionService.insert(mansion,3,5,4,1l);
    }
    @Test
    public void findAll(){
        System.out.println(mansionService.findAllVO(1l));
    }
}
