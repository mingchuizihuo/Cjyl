package com.idea.cjyl.totalmodule.web.service.impl;


import com.idea.cjyl.core.generic.GenericDao;
import com.idea.cjyl.core.generic.GenericServiceImpl;

import com.idea.cjyl.totalmodule.web.dao.OlderKinsfolkMapper;
import com.idea.cjyl.totalmodule.web.domain.pojo.OlderKinsfolk;
import com.idea.cjyl.totalmodule.web.domain.pojo.OlderKinsfolkExample;
import com.idea.cjyl.totalmodule.web.service.OlderKinsfolkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
    public class OlderKinsfolkServiceImpl extends GenericServiceImpl<OlderKinsfolk, Long,OlderKinsfolkExample> implements OlderKinsfolkService {

       @Autowired
       private OlderKinsfolkMapper olderkinsfolkDao;
       @Override
       public GenericDao<OlderKinsfolk, Long,OlderKinsfolkExample> getDao() {
       return olderkinsfolkDao;
       }


}
