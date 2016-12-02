package com.idea.cjyl.totalmodule.web.service.impl;


import com.idea.cjyl.core.generic.GenericDao;
import com.idea.cjyl.core.generic.GenericServiceImpl;

import com.idea.cjyl.totalmodule.web.dao.OrganizationLoginMapper;
import com.idea.cjyl.totalmodule.web.domain.pojo.OrganizationLogin;
import com.idea.cjyl.totalmodule.web.domain.pojo.OrganizationLoginExample;
import com.idea.cjyl.totalmodule.web.service.OrganizationLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
    public class OrganizationLoginServiceImpl extends GenericServiceImpl<OrganizationLogin, Long,OrganizationLoginExample> implements OrganizationLoginService {

       @Autowired
       private OrganizationLoginMapper organizationloginDao;
       @Override
       public GenericDao<OrganizationLogin, Long,OrganizationLoginExample> getDao() {
       return organizationloginDao;
       }


}
