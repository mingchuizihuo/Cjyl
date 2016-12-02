package com.idea.cjyl.totalmodule.web.service.impl;


import com.idea.cjyl.core.generic.GenericDao;
import com.idea.cjyl.core.generic.GenericServiceImpl;

import com.idea.cjyl.totalmodule.web.dao.OlderInitialFeeMapper;
import com.idea.cjyl.totalmodule.web.domain.pojo.OlderInitialFee;
import com.idea.cjyl.totalmodule.web.domain.pojo.OlderInitialFeeExample;
import com.idea.cjyl.totalmodule.web.service.OlderInitialFeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
    public class OlderInitialFeeServiceImpl extends GenericServiceImpl<OlderInitialFee, Long,OlderInitialFeeExample> implements OlderInitialFeeService {

       @Autowired
       private OlderInitialFeeMapper olderinitialfeeDao;
       @Override
       public GenericDao<OlderInitialFee, Long,OlderInitialFeeExample> getDao() {
       return olderinitialfeeDao;
       }


}
