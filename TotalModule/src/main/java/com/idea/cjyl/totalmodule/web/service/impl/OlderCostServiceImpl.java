package com.idea.cjyl.totalmodule.web.service.impl;


import com.idea.cjyl.core.generic.GenericDao;
import com.idea.cjyl.core.generic.GenericServiceImpl;

import com.idea.cjyl.totalmodule.web.dao.OlderCostMapper;
import com.idea.cjyl.totalmodule.web.domain.pojo.OlderCost;
import com.idea.cjyl.totalmodule.web.domain.pojo.OlderCostExample;
import com.idea.cjyl.totalmodule.web.service.OlderCostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
    public class OlderCostServiceImpl extends GenericServiceImpl<OlderCost, Long,OlderCostExample> implements OlderCostService {

       @Autowired
       private OlderCostMapper oldercostDao;
       @Override
       public GenericDao<OlderCost, Long,OlderCostExample> getDao() {
       return oldercostDao;
       }


}
