package com.idea.cjyl.totalmodule.web.service.impl;


import com.idea.cjyl.core.generic.GenericDao;
import com.idea.cjyl.core.generic.GenericDaoMyself;

import com.idea.cjyl.core.generic.GenericServiceVOImpl;
import com.idea.cjyl.totalmodule.web.dao.BedMapper;
import com.idea.cjyl.totalmodule.web.dao.OlderMapper;
import com.idea.cjyl.totalmodule.web.dao.myself.OlderMapperMyself;

import com.idea.cjyl.totalmodule.web.domain.pojo.Bed;
import com.idea.cjyl.totalmodule.web.domain.pojo.BedExample;
import com.idea.cjyl.totalmodule.web.domain.pojo.Older;
import com.idea.cjyl.totalmodule.web.domain.pojo.OlderExample;
import com.idea.cjyl.totalmodule.web.domain.vo.OlderIntoInfoVO;
import com.idea.cjyl.totalmodule.web.domain.vo.OlderVO;
import com.idea.cjyl.totalmodule.web.domain.vo.OlderWeekIntoVO;
import com.idea.cjyl.totalmodule.web.service.OlderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
public class OlderServiceImpl extends GenericServiceVOImpl<OlderVO, Older, Long, OlderExample> implements OlderService {

    @Autowired
    private OlderMapper olderDao;

    @Autowired
    private OlderMapperMyself olderMapperMyself;

    @Autowired
    private BedMapper bedMapper;

    @Override
    public GenericDao<Older, Long, OlderExample> getDao() {
        return olderDao;
    }


    @Override
    public GenericDaoMyself<OlderVO, Older, Long, OlderExample> getVODao() {
        return olderMapperMyself;
    }

    @Override
    public OlderExample getModelExample(Older older) {
        OlderExample olderExample = new OlderExample();
        OlderExample.Criteria criteria = olderExample.createCriteria();
        if (older.getName() != null) {
            criteria.andNameLike(older.getName());
        }
        if (older.getTel() != null) {
            criteria.andTelLike(older.getTel());
        }
        if (older.getCardId() != null) {
            criteria.andCardIdLike(older.getCardId());
        }
        if (older.getCheckInDate() != null) {
            criteria.andCheckInDateEqualTo(older.getCheckInDate());
        }
        return olderExample;
    }


    @Override
    public OlderIntoInfoVO getIntoInfo() {
        OlderIntoInfoVO olderIntoInfoVO = new OlderIntoInfoVO();
        int beds = bedMapper.countByExample(new BedExample());
        olderIntoInfoVO.setBeds(beds);
        OlderExample olderExample = new OlderExample();
        olderExample.createCriteria().andOlderStateEqualTo((byte) 1);
        List<Older> olders = olderDao.selectByExample(olderExample);
        List<OlderWeekIntoVO> olderWeekIntoVOS = new ArrayList<>();
        for (int i = 0; i < 12; i++) {
            OlderWeekIntoVO olderWeekIntoVO = new OlderWeekIntoVO();
            olderWeekIntoVO.setMonth((i + 1));
            olderWeekIntoVOS.add(olderWeekIntoVO);
        }


        int girlNum = 0;
        int manNum = 0;
        Calendar cal_1 = Calendar.getInstance();
        Calendar cal_2 = Calendar.getInstance();
        cal_2.setTime(new Date());

        for (Older older : olders) {
            if (older.getSex() == 14) {
                manNum++;
            }
            if (older.getSex() == 15) {
                girlNum++;
            }
            cal_1.setTime(older.getCheckInDate());
            if (cal_1.getWeekYear() == cal_2.getWeekYear()) {
                for (int i = 0; i < 12; i++) {


                    OlderWeekIntoVO olderWeekIntoVO = olderWeekIntoVOS.get(i);
                    if (cal_1.get(Calendar.MONTH) == i ) {
                        if (older.getSex() == 15) {
                            olderWeekIntoVO.setGirlNum(olderWeekIntoVO.getGirlNum() + 1);
                        }
                        if (older.getSex() == 14) {
                            olderWeekIntoVO.setManNum(olderWeekIntoVO.getManNum() + 1);
                        }
                    }

                }


            }


        }

        olderIntoInfoVO.setManNum(manNum);
        olderIntoInfoVO.setGirlNum(girlNum);
        olderIntoInfoVO.setOlderWeekIntoVOS(olderWeekIntoVOS);
        return olderIntoInfoVO;
    }


    private static int getQuarterInMonth(int month, boolean isQuarterStart) {
        int months[] = {1, 4, 7, 10};
        if (!isQuarterStart) {
            months = new int[]{3, 6, 9, 12};
        }
        if (month >= 2 && month <= 4)
            return months[0];
        else if (month >= 5 && month <= 7)
            return months[1];
        else if (month >= 8 && month <= 10)
            return months[2];
        else
            return months[3];
    }
}
