package com.idea.cjyl.totalmodule.web.dao.myself;

import com.idea.cjyl.core.generic.GenericDao;
import com.idea.cjyl.totalmodule.web.domain.pojo.Older;
import com.idea.cjyl.totalmodule.web.domain.pojo.OlderExample;
import com.idea.cjyl.totalmodule.web.domain.vo.OlderBriefVO;
import com.idea.cjyl.totalmodule.web.domain.vo.OlderVO;

import java.util.List;

/**
 * Created by Administrator on 2016/12/2.
 */
public interface OlderBriefMapperMyself extends GenericDao {
    /**
     * 查询所有老人
     * @return
     */
    public List<OlderBriefVO> findAllVO();

    /**
     * 根据老人条件查询老人
     * @param olderExample
     * @return
     */
    public List<OlderBriefVO> findAllVOByExample(OlderExample olderExample);

}
