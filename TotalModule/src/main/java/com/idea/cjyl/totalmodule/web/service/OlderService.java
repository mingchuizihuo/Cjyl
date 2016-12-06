package com.idea.cjyl.totalmodule.web.service;

import com.github.pagehelper.Page;
import com.idea.cjyl.core.generic.GenericService;

import com.idea.cjyl.totalmodule.web.domain.pojo.Older;
import com.idea.cjyl.totalmodule.web.domain.pojo.OlderExample;
import com.idea.cjyl.totalmodule.web.domain.vo.OlderVO;

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

    public OlderVO findVOById(Long id);
}
