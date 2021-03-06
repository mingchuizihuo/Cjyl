package com.idea.cjyl.totalmodule.web.domain.pojo;

import java.util.Date;

public class OlderAdmissionAndDischargeLog {
    private Long id;

    private Long organizationLoginId;

    private Long olderId;

    private Date admissionDate;

    private Long checkInInitCostState;

    private Date initialFeeDate;

    private Date closeAnAccountDate;

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

    public Long getOlderId() {
        return olderId;
    }

    public void setOlderId(Long olderId) {
        this.olderId = olderId;
    }

    public Date getAdmissionDate() {
        return admissionDate;
    }

    public void setAdmissionDate(Date admissionDate) {
        this.admissionDate = admissionDate;
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

    public Date getCloseAnAccountDate() {
        return closeAnAccountDate;
    }

    public void setCloseAnAccountDate(Date closeAnAccountDate) {
        this.closeAnAccountDate = closeAnAccountDate;
    }
}