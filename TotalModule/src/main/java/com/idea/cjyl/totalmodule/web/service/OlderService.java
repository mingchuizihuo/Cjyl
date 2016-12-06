package com.idea.cjyl.totalmodule.web.service;

import com.github.pagehelper.Page;
import com.idea.cjyl.core.generic.GenericService;

import com.idea.cjyl.totalmodule.web.domain.pojo.Older;
import com.idea.cjyl.totalmodule.web.domain.pojo.OlderExample;
import com.idea.cjyl.totalmodule.web.domain.vo.OlderBriefVO;
import com.idea.cjyl.totalmodule.web.domain.vo.OlderVO;

import java.util.List;

public interface OlderService extends GenericService<Older,Long,OlderExample>{

    /**
     * 分页查询老人vo信息
     * @param currentPage
     * @param limit
     * @return
     */
    public Page<OlderVO> findAllVO(Integer currentPage, Integer limit);

    /**
     * 按条件分页查询老人信息
     * @param older
     * @param currentPage
     * @param limit
     * @return
     */
    public Page<OlderVO> findVOByExample(Older older,Integer currentPage, Integer limit);

    /**
     * 根据id查询
     * @param id
     * @return
     */
    public OlderVO findVOById(Long id);

    /**
     * 分页查询老人简介
     * @param currentPage
     * @param limit
     * @return
     */
    public Page<OlderBriefVO> findAllBriefVO(Integer currentPage, Integer limit);

    /**
     * 条件筛选分页查询老人简介
     * @param older
     * @param currentPage
     * @param limit
     * @return
     */
    public Page<OlderBriefVO> findAllBriefVOByExample(Older older,Integer currentPage, Integer limit);


}
