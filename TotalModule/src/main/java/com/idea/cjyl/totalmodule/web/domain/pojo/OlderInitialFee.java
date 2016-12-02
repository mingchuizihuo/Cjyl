package com.idea.cjyl.totalmodule.web.domain.pojo;

import java.util.Date;

public class OlderInitialFee {
    private Long id;

    private Long organizationLoginId;

    private Long oldId;

    private Long checkInInitCostId;

    private Long checkInInitCostState;

    private Date initialFeeDate;

    private Date closeAnAccount;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getOrganizationLoginId() {
        return organizationLoginId;
    }

    public void setOrganizationLoginId(Long organizationLoginId) {
        this.organizationLoginId = organizationLoginId;
    }

    public Long getOldId() {
        return oldId;
    }

    public void setOldId(Long oldId) {
        this.oldId = oldId;
    }

    public Long getCheckInInitCostId() {
        return checkInInitCostId;
    }

    public void setCheckInInitCostId(Long checkInInitCostId) {
        this.checkInInitCostId = checkInInitCostId;
    }

    public Long getCheckInInitCostState() {
        return checkInInitCostState;
    }

    public void setCheckInInitCostState(Long checkInInitCostState) {
        this.checkInInitCostState = checkInInitCostState;
    }

    public Date getInitialFeeDate() {
        return initialFeeDate;
    }

    public void setInitialFeeDate(Date initialFeeDate) {
        this.initialFeeDate = initialFeeDate;
    }

    public Date getCloseAnAccount() {
        return closeAnAccount;
    }

    public void setCloseAnAccount(Date closeAnAccount) {
        this.closeAnAccount = closeAnAccount;
    }
}