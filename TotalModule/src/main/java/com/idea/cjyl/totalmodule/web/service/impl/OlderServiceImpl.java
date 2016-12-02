package com.idea.cjyl.totalmodule.web.service.impl;


import com.idea.cjyl.core.generic.GenericDao;
import com.idea.cjyl.core.generic.GenericServiceImpl;

import com.idea.cjyl.totalmodule.web.dao.OlderMapper;
import com.idea.cjyl.totalmodule.web.domain.pojo.Older;
import com.idea.cjyl.totalmodule.web.domain.pojo.OlderExample;
import com.idea.cjyl.totalmodule.web.service.OlderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
    public class OlderServiceImpl extends GenericServiceImpl<Older, Long,OlderExample> implements OlderService {

       @Autowired
       private OlderMapper olderDao;
       @Override
       public GenericDao<Older, Long,OlderExample> getDao() {
       return olderDao;
       }


}
