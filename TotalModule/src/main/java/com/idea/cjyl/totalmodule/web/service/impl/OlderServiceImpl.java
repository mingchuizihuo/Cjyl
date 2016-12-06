package com.idea.cjyl.totalmodule.web.service.impl;


import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.idea.cjyl.core.generic.GenericDao;
import com.idea.cjyl.core.generic.GenericServiceImpl;

import com.idea.cjyl.totalmodule.web.dao.OlderMapper;
import com.idea.cjyl.totalmodule.web.dao.myself.OlderBriefMapperMyself;
import com.idea.cjyl.totalmodule.web.dao.myself.OlderMapperMyself;
import com.idea.cjyl.totalmodule.web.domain.pojo.Older;
import com.idea.cjyl.totalmodule.web.domain.pojo.OlderExample;
import com.idea.cjyl.totalmodule.web.domain.vo.OlderBriefVO;
import com.idea.cjyl.totalmodule.web.domain.vo.OlderVO;
import com.idea.cjyl.totalmodule.web.service.OlderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.List;


@Service
public class OlderServiceImpl extends GenericServiceImpl<Older, Long, OlderExample> implements OlderService {

    @Autowired
    private OlderMapper olderDao;
    @Autowired
    private OlderBriefMapperMyself olderBriefMapperMyself;
    @Autowired
    private OlderMapperMyself olderMapperMyself;

    @Override
    public GenericDao<Older, Long, OlderExample> getDao() {
        return olderDao;
    }


    @Override
    public Page<OlderVO> findAllVO(Integer currentPage, Integer limit) {
        if (currentPage == null) {
            currentPage = 1;
        }
        if (limit == null) {
            limit = 10;
        }

        PageHelper.startPage(currentPage, limit);
        Page<OlderVO> list = (Page<OlderVO>) olderMapperMyself.findAllVO();
        return list;
    }


    public static OlderExample olderSelect(Older older){
        OlderExample olderExample = new OlderExample();
        OlderExample.Criteria criteria = olderExample.createCriteria();
        if (older.getName() != null) {
            criteria.andNameLike(older.getName());
        } else if (older.getTel() != null) {
            criteria.andTelLike(older.getTel());
        } else if (older.getCardId() != null) {
            criteria.andCardIdLike(older.getCardId());
        } else if (older.getCheckInDate() != null) {
            criteria.andCheckInDateEqualTo(older.getCheckInDate());
        }
        return olderExample;
    }

    @Override
    public Page<OlderVO> findVOByExample(Older older, Integer currentPage, Integer limit) {


        if (currentPage == null) {
            currentPage = 1;
        }
        if (limit == null) {
            limit = 10;
        }

        PageHelper.startPage(currentPage, limit);
        Page<OlderVO> list = (Page<OlderVO>) olderMapperMyself.findVOByExaple(olderSelect(older));


        return list;
    }

    @Override
    public OlderVO findVOById(Long id) {
        return olderMapperMyself.selectByPrimaryKey(id);
    }

    /**
     * 查询老人简介
     *
     * @return
     */

    @Override
    public Page<OlderBriefVO> findAllBriefVO(Integer currentPage, Integer limit) {
        if (currentPage == null) {
            currentPage = 1;
        }
        if (limit == null) {
            limit = 10;
        }

        PageHelper.startPage(currentPage, limit);
        Page<OlderBriefVO> list = (Page<OlderBriefVO>) olderBriefMapperMyself.findAllVO();
        return list;
    }

    /**
     * 根据条件查询老人简介
     *
     * @param older
     * @param currentPage
     * @param limit
     * @return
     */
    @Override
    public Page<OlderBriefVO> findAllBriefVOByExample(Older older, Integer currentPage, Integer limit) {


        if (currentPage == null) {
            currentPage = 1;
        }
        if (limit == null) {
            limit = 10;
        }

        PageHelper.startPage(currentPage, limit);
        Page<OlderBriefVO> list = (Page<OlderBriefVO>) olderBriefMapperMyself.findAllVOByExample(olderSelect(older));


        return list;
    }


}
