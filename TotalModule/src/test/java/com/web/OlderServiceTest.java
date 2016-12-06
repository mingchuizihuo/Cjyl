package com.web;

import SupportTest.SupportTest;
import com.idea.cjyl.totalmodule.web.domain.pojo.DataDictionary;
import com.idea.cjyl.totalmodule.web.globals.AnalysisConstant;
import com.idea.cjyl.totalmodule.web.service.OlderService;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by xiao on 2016/12/6.
 */
public class OlderServiceTest extends SupportTest{

    @Autowired
    private OlderService olderService;
    @Test
    public void testFindAllVO(){
        List<DataDictionary> dataDictionaries = new ArrayList<>();
        DataDictionary dataDictionary = new DataDictionary();
        dataDictionary.setDataName("ceshi");
        dataDictionary.setDataLevel((byte)1);
        dataDictionary.setOrganizationLoginId(1L);
        dataDictionary.setTid(0L);
        dataDictionary.setId(1L);
        dataDictionaries.add(dataDictionary);
        AnalysisConstant.dataDictionaryList = dataDictionaries;
        System.out.println(olderService.findAllBriefVO());
    }
}
