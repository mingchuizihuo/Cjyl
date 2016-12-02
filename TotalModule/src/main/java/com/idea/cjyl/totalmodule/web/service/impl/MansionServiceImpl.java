package com.idea.cjyl.totalmodule.web.service.impl;


import com.idea.cjyl.core.generic.GenericDao;
import com.idea.cjyl.core.generic.GenericServiceImpl;

import com.idea.cjyl.totalmodule.web.dao.MansionMapper;
import com.idea.cjyl.totalmodule.web.domain.pojo.Mansion;
import com.idea.cjyl.totalmodule.web.domain.pojo.MansionExample;
import com.idea.cjyl.totalmodule.web.service.MansionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
    public class MansionServiceImpl extends GenericServiceImpl<Mansion, Long,MansionExample> implements MansionService {

       @Autowired
       private MansionMapper mansionDao;
       @Override
       public GenericDao<Mansion, Long,MansionExample> getDao() {
       return mansionDao;
       }


}
