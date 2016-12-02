package com.idea.cjyl.totalmodule.web.dao.myself;

import com.idea.cjyl.core.generic.GenericDao;
import com.idea.cjyl.totalmodule.web.domain.vo.MansionVO;

import java.util.List;

/**
 * Created by Administrator on 2016/12/2.
 */
public interface MansionMapperMyself extends GenericDao {

    /**
     * 查询大楼详情（包括楼层，房间，床）
     * @param loginId
     * @return
     */
    public List<MansionVO> findAllVO(Long loginId);
}
