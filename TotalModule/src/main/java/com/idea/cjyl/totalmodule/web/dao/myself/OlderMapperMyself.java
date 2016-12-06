package com.idea.cjyl.totalmodule.web.dao.myself;

import com.idea.cjyl.core.generic.GenericDao;
import com.idea.cjyl.totalmodule.web.domain.pojo.OlderExample;
import com.idea.cjyl.totalmodule.web.domain.vo.OlderVO;

import java.util.List;

/**
 * Created by Administrator on 2016/12/2.
 */
public interface OlderMapperMyself extends GenericDao {

    /**
     * 查询老人详情
     * @param loginId
     * @return
     */
    public List<OlderVO> findAllVO(Long loginId);

    /**
     * 通过条件查询老人信息
     * @param example
     * @return
     */
    public List<OlderVO> findVOByExaple(OlderExample example);
}
