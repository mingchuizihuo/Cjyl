package com.idea.cjyl.totalmodule.web.service.impl;


import com.idea.cjyl.core.generic.GenericDao;
import com.idea.cjyl.core.generic.GenericDaoMyself;

import com.idea.cjyl.core.generic.GenericServiceVOImpl;
import com.idea.cjyl.totalmodule.web.dao.OlderMapper;
import com.idea.cjyl.totalmodule.web.dao.myself.OlderMapperMyself;

import com.idea.cjyl.totalmodule.web.domain.pojo.Older;
import com.idea.cjyl.totalmodule.web.domain.pojo.OlderExample;
import com.idea.cjyl.totalmodule.web.domain.vo.OlderVO;
import com.idea.cjyl.totalmodule.web.service.OlderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class OlderServiceImpl extends GenericServiceVOImpl<OlderVO,Older, Long,OlderExample> implements OlderService {

    @Autowired
    private OlderMapper olderDao;

    @Autowired
    private OlderMapperMyself olderMapperMyself;

    @Override
    public GenericDao<Older, Long, OlderExample> getDao() {
        return olderDao;
    }


    @Override
    public GenericDaoMyself<OlderVO,Older, Long, OlderExample> getVODao() {
        return olderMapperMyself;
    }

    @Override
    public OlderExample getModelExample(Older older) {
        OlderExample olderExample = new OlderExample();
        OlderExample.Criteria criteria = olderExample.createCriteria();
        if (older.getName() != null) {
            criteria.andNameLike(older.getName());
        }  if (older.getTel() != null) {
            criteria.andTelLike(older.getTel());
        }  if (older.getCardId() != null) {
            criteria.andCardIdLike(older.getCardId());
        }  if (older.getCheckInDate() != null) {
            criteria.andCheckInDateEqualTo(older.getCheckInDate());
        }
        return olderExample;
    }






}
