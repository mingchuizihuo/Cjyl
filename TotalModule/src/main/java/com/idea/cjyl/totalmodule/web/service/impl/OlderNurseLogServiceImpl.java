package com.idea.cjyl.totalmodule.web.service.impl;


import com.idea.cjyl.core.generic.GenericDao;
import com.idea.cjyl.core.generic.GenericServiceImpl;

import com.idea.cjyl.totalmodule.web.dao.OlderNurseLogMapper;
import com.idea.cjyl.totalmodule.web.domain.pojo.OlderNurseLog;
import com.idea.cjyl.totalmodule.web.domain.pojo.OlderNurseLogExample;
import com.idea.cjyl.totalmodule.web.service.OlderNurseLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
    public class OlderNurseLogServiceImpl extends GenericServiceImpl<OlderNurseLog, Long,OlderNurseLogExample> implements OlderNurseLogService {

       @Autowired
       private OlderNurseLogMapper oldernurselogDao;
       @Override
       public GenericDao<OlderNurseLog, Long,OlderNurseLogExample> getDao() {
       return oldernurselogDao;
       }


}
