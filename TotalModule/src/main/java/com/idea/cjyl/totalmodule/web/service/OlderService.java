package com.idea.cjyl.totalmodule.web.service;

import com.idea.cjyl.core.generic.GenericServiceVO;
import com.idea.cjyl.totalmodule.web.domain.pojo.Older;
import com.idea.cjyl.totalmodule.web.domain.pojo.OlderExample;
import com.idea.cjyl.totalmodule.web.domain.vo.OlderIntoInfoVO;
import com.idea.cjyl.totalmodule.web.domain.vo.OlderVO;

import java.util.List;

public interface OlderService extends GenericServiceVO<OlderVO,Older, Long,OlderExample> {
    /**
     * 获取老人入住情况
     * @return
     */
    public OlderIntoInfoVO getIntoInfo();
}
