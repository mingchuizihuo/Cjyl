package com.idea.cjyl.totalmodule.web.domain.pojo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class OlderAdmissionAndDischargeLogExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public OlderAdmissionAndDischargeLogExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Long value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Long value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Long value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Long value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Long value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Long value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Long> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Long> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Long value1, Long value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Long value1, Long value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andOrganizationLoginIdIsNull() {
            addCriterion("organization_login_id is null");
            return (Criteria) this;
        }

        public Criteria andOrganizationLoginIdIsNotNull() {
            addCriterion("organization_login_id is not null");
            return (Criteria) this;
        }

        public Criteria andOrganizationLoginIdEqualTo(Long value) {
            addCriterion("organization_login_id =", value, "organizationLoginId");
            return (Criteria) this;
        }

        public Criteria andOrganizationLoginIdNotEqualTo(Long value) {
            addCriterion("organization_login_id <>", value, "organizationLoginId");
            return (Criteria) this;
        }

        public Criteria andOrganizationLoginIdGreaterThan(Long value) {
            addCriterion("organization_login_id >", value, "organizationLoginId");
            return (Criteria) this;
        }

        public Criteria andOrganizationLoginIdGreaterThanOrEqualTo(Long value) {
            addCriterion("organization_login_id >=", value, "organizationLoginId");
            return (Criteria) this;
        }

        public Criteria andOrganizationLoginIdLessThan(Long value) {
            addCriterion("organization_login_id <", value, "organizationLoginId");
            return (Criteria) this;
        }

        public Criteria andOrganizationLoginIdLessThanOrEqualTo(Long value) {
            addCriterion("organization_login_id <=", value, "organizationLoginId");
            return (Criteria) this;
        }

        public Criteria andOrganizationLoginIdIn(List<Long> values) {
            addCriterion("organization_login_id in", values, "organizationLoginId");
            return (Criteria) this;
        }

        public Criteria andOrganizationLoginIdNotIn(List<Long> values) {
            addCriterion("organization_login_id not in", values, "organizationLoginId");
            return (Criteria) this;
        }

        public Criteria andOrganizationLoginIdBetween(Long value1, Long value2) {
            addCriterion("organization_login_id between", value1, value2, "organizationLoginId");
            return (Criteria) this;
        }

        public Criteria andOrganizationLoginIdNotBetween(Long value1, Long value2) {
            addCriterion("organization_login_id not between", value1, value2, "organizationLoginId");
            return (Criteria) this;
        }

        public Criteria andOlderIdIsNull() {
            addCriterion("older_id is null");
            return (Criteria) this;
        }

        public Criteria andOlderIdIsNotNull() {
            addCriterion("older_id is not null");
            return (Criteria) this;
        }

        public Criteria andOlderIdEqualTo(Long value) {
            addCriterion("older_id =", value, "olderId");
            return (Criteria) this;
        }

        public Criteria andOlderIdNotEqualTo(Long value) {
            addCriterion("older_id <>", value, "olderId");
            return (Criteria) this;
        }

        public Criteria andOlderIdGreaterThan(Long value) {
            addCriterion("older_id >", value, "olderId");
            return (Criteria) this;
        }

        public Criteria andOlderIdGreaterThanOrEqualTo(Long value) {
            addCriterion("older_id >=", value, "olderId");
            return (Criteria) this;
        }

        public Criteria andOlderIdLessThan(Long value) {
            addCriterion("older_id <", value, "olderId");
            return (Criteria) this;
        }

        public Criteria andOlderIdLessThanOrEqualTo(Long value) {
            addCriterion("older_id <=", value, "olderId");
            return (Criteria) this;
        }

        public Criteria andOlderIdIn(List<Long> values) {
            addCriterion("older_id in", values, "olderId");
            return (Criteria) this;
        }

        public Criteria andOlderIdNotIn(List<Long> values) {
            addCriterion("older_id not in", values, "olderId");
            return (Criteria) this;
        }

        public Criteria andOlderIdBetween(Long value1, Long value2) {
            addCriterion("older_id between", value1, value2, "olderId");
            return (Criteria) this;
        }

        public Criteria andOlderIdNotBetween(Long value1, Long value2) {
            addCriterion("older_id not between", value1, value2, "olderId");
            return (Criteria) this;
        }

        public Criteria andAdmissionDateIsNull() {
            addCriterion("admission_date is null");
            return (Criteria) this;
        }

        public Criteria andAdmissionDateIsNotNull() {
            addCriterion("admission_date is not null");
            return (Criteria) this;
        }

        public Criteria andAdmissionDateEqualTo(Date value) {
            addCriterion("admission_date =", value, "admissionDate");
            return (Criteria) this;
        }

        public Criteria andAdmissionDateNotEqualTo(Date value) {
            addCriterion("admission_date <>", value, "admissionDate");
            return (Criteria) this;
        }

        public Criteria andAdmissionDateGreaterThan(Date value) {
            addCriterion("admission_date >", value, "admissionDate");
            return (Criteria) this;
        }

        public Criteria andAdmissionDateGreaterThanOrEqualTo(Date value) {
            addCriterion("admission_date >=", value, "admissionDate");
            return (Criteria) this;
        }

        public Criteria andAdmissionDateLessThan(Date value) {
            addCriterion("admission_date <", value, "admissionDate");
            return (Criteria) this;
        }

        public Criteria andAdmissionDateLessThanOrEqualTo(Date value) {
            addCriterion("admission_date <=", value, "admissionDate");
            return (Criteria) this;
        }

        public Criteria andAdmissionDateIn(List<Date> values) {
            addCriterion("admission_date in", values, "admissionDate");
            return (Criteria) this;
        }

        public Criteria andAdmissionDateNotIn(List<Date> values) {
            addCriterion("admission_date not in", values, "admissionDate");
            return (Criteria) this;
        }

        public Criteria andAdmissionDateBetween(Date value1, Date value2) {
            addCriterion("admission_date between", value1, value2, "admissionDate");
            return (Criteria) this;
        }

        public Criteria andAdmissionDateNotBetween(Date value1, Date value2) {
            addCriterion("admission_date not between", value1, value2, "admissionDate");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostStateIsNull() {
            addCriterion("check_in_init_cost_state is null");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostStateIsNotNull() {
            addCriterion("check_in_init_cost_state is not null");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostStateEqualTo(Long value) {
            addCriterion("check_in_init_cost_state =", value, "checkInInitCostState");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostStateNotEqualTo(Long value) {
            addCriterion("check_in_init_cost_state <>", value, "checkInInitCostState");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostStateGreaterThan(Long value) {
            addCriterion("check_in_init_cost_state >", value, "checkInInitCostState");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostStateGreaterThanOrEqualTo(Long value) {
            addCriterion("check_in_init_cost_state >=", value, "checkInInitCostState");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostStateLessThan(Long value) {
            addCriterion("check_in_init_cost_state <", value, "checkInInitCostState");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostStateLessThanOrEqualTo(Long value) {
            addCriterion("check_in_init_cost_state <=", value, "checkInInitCostState");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostStateIn(List<Long> values) {
            addCriterion("check_in_init_cost_state in", values, "checkInInitCostState");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostStateNotIn(List<Long> values) {
            addCriterion("check_in_init_cost_state not in", values, "checkInInitCostState");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostStateBetween(Long value1, Long value2) {
            addCriterion("check_in_init_cost_state between", value1, value2, "checkInInitCostState");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostStateNotBetween(Long value1, Long value2) {
            addCriterion("check_in_init_cost_state not between", value1, value2, "checkInInitCostState");
            return (Criteria) this;
        }

        public Criteria andInitialFeeDateIsNull() {
            addCriterion("initial_fee_date is null");
            return (Criteria) this;
        }

        public Criteria andInitialFeeDateIsNotNull() {
            addCriterion("initial_fee_date is not null");
            return (Criteria) this;
        }

        public Criteria andInitialFeeDateEqualTo(Date value) {
            addCriterion("initial_fee_date =", value, "initialFeeDate");
            return (Criteria) this;
        }

        public Criteria andInitialFeeDateNotEqualTo(Date value) {
            addCriterion("initial_fee_date <>", value, "initialFeeDate");
            return (Criteria) this;
        }

        public Criteria andInitialFeeDateGreaterThan(Date value) {
            addCriterion("initial_fee_date >", value, "initialFeeDate");
            return (Criteria) this;
        }

        public Criteria andInitialFeeDateGreaterThanOrEqualTo(Date value) {
            addCriterion("initial_fee_date >=", value, "initialFeeDate");
            return (Criteria) this;
        }

        public Criteria andInitialFeeDateLessThan(Date value) {
            addCriterion("initial_fee_date <", value, "initialFeeDate");
            return (Criteria) this;
        }

        public Criteria andInitialFeeDateLessThanOrEqualTo(Date value) {
            addCriterion("initial_fee_date <=", value, "initialFeeDate");
            return (Criteria) this;
        }

        public Criteria andInitialFeeDateIn(List<Date> values) {
            addCriterion("initial_fee_date in", values, "initialFeeDate");
            return (Criteria) this;
        }

        public Criteria andInitialFeeDateNotIn(List<Date> values) {
            addCriterion("initial_fee_date not in", values, "initialFeeDate");
            return (Criteria) this;
        }

        public Criteria andInitialFeeDateBetween(Date value1, Date value2) {
            addCriterion("initial_fee_date between", value1, value2, "initialFeeDate");
            return (Criteria) this;
        }

        public Criteria andInitialFeeDateNotBetween(Date value1, Date value2) {
            addCriterion("initial_fee_date not between", value1, value2, "initialFeeDate");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountDateIsNull() {
            addCriterion("close_an_account_date is null");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountDateIsNotNull() {
            addCriterion("close_an_account_date is not null");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountDateEqualTo(Date value) {
            addCriterion("close_an_account_date =", value, "closeAnAccountDate");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountDateNotEqualTo(Date value) {
            addCriterion("close_an_account_date <>", value, "closeAnAccountDate");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountDateGreaterThan(Date value) {
            addCriterion("close_an_account_date >", value, "closeAnAccountDate");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountDateGreaterThanOrEqualTo(Date value) {
            addCriterion("close_an_account_date >=", value, "closeAnAccountDate");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountDateLessThan(Date value) {
            addCriterion("close_an_account_date <", value, "closeAnAccountDate");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountDateLessThanOrEqualTo(Date value) {
            addCriterion("close_an_account_date <=", value, "closeAnAccountDate");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountDateIn(List<Date> values) {
            addCriterion("close_an_account_date in", values, "closeAnAccountDate");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountDateNotIn(List<Date> values) {
            addCriterion("close_an_account_date not in", values, "closeAnAccountDate");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountDateBetween(Date value1, Date value2) {
            addCriterion("close_an_account_date between", value1, value2, "closeAnAccountDate");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountDateNotBetween(Date value1, Date value2) {
            addCriterion("close_an_account_date not between", value1, value2, "closeAnAccountDate");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}