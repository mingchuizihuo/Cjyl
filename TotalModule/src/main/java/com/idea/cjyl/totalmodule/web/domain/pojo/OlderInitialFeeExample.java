package com.idea.cjyl.totalmodule.web.domain.pojo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class OlderInitialFeeExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public OlderInitialFeeExample() {
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

        public Criteria andOldIdIsNull() {
            addCriterion("old_id is null");
            return (Criteria) this;
        }

        public Criteria andOldIdIsNotNull() {
            addCriterion("old_id is not null");
            return (Criteria) this;
        }

        public Criteria andOldIdEqualTo(Long value) {
            addCriterion("old_id =", value, "oldId");
            return (Criteria) this;
        }

        public Criteria andOldIdNotEqualTo(Long value) {
            addCriterion("old_id <>", value, "oldId");
            return (Criteria) this;
        }

        public Criteria andOldIdGreaterThan(Long value) {
            addCriterion("old_id >", value, "oldId");
            return (Criteria) this;
        }

        public Criteria andOldIdGreaterThanOrEqualTo(Long value) {
            addCriterion("old_id >=", value, "oldId");
            return (Criteria) this;
        }

        public Criteria andOldIdLessThan(Long value) {
            addCriterion("old_id <", value, "oldId");
            return (Criteria) this;
        }

        public Criteria andOldIdLessThanOrEqualTo(Long value) {
            addCriterion("old_id <=", value, "oldId");
            return (Criteria) this;
        }

        public Criteria andOldIdIn(List<Long> values) {
            addCriterion("old_id in", values, "oldId");
            return (Criteria) this;
        }

        public Criteria andOldIdNotIn(List<Long> values) {
            addCriterion("old_id not in", values, "oldId");
            return (Criteria) this;
        }

        public Criteria andOldIdBetween(Long value1, Long value2) {
            addCriterion("old_id between", value1, value2, "oldId");
            return (Criteria) this;
        }

        public Criteria andOldIdNotBetween(Long value1, Long value2) {
            addCriterion("old_id not between", value1, value2, "oldId");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostIdIsNull() {
            addCriterion("check_in_init_cost_id is null");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostIdIsNotNull() {
            addCriterion("check_in_init_cost_id is not null");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostIdEqualTo(Long value) {
            addCriterion("check_in_init_cost_id =", value, "checkInInitCostId");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostIdNotEqualTo(Long value) {
            addCriterion("check_in_init_cost_id <>", value, "checkInInitCostId");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostIdGreaterThan(Long value) {
            addCriterion("check_in_init_cost_id >", value, "checkInInitCostId");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostIdGreaterThanOrEqualTo(Long value) {
            addCriterion("check_in_init_cost_id >=", value, "checkInInitCostId");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostIdLessThan(Long value) {
            addCriterion("check_in_init_cost_id <", value, "checkInInitCostId");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostIdLessThanOrEqualTo(Long value) {
            addCriterion("check_in_init_cost_id <=", value, "checkInInitCostId");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostIdIn(List<Long> values) {
            addCriterion("check_in_init_cost_id in", values, "checkInInitCostId");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostIdNotIn(List<Long> values) {
            addCriterion("check_in_init_cost_id not in", values, "checkInInitCostId");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostIdBetween(Long value1, Long value2) {
            addCriterion("check_in_init_cost_id between", value1, value2, "checkInInitCostId");
            return (Criteria) this;
        }

        public Criteria andCheckInInitCostIdNotBetween(Long value1, Long value2) {
            addCriterion("check_in_init_cost_id not between", value1, value2, "checkInInitCostId");
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

        public Criteria andCloseAnAccountIsNull() {
            addCriterion("close_an_account is null");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountIsNotNull() {
            addCriterion("close_an_account is not null");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountEqualTo(Date value) {
            addCriterion("close_an_account =", value, "closeAnAccount");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountNotEqualTo(Date value) {
            addCriterion("close_an_account <>", value, "closeAnAccount");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountGreaterThan(Date value) {
            addCriterion("close_an_account >", value, "closeAnAccount");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountGreaterThanOrEqualTo(Date value) {
            addCriterion("close_an_account >=", value, "closeAnAccount");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountLessThan(Date value) {
            addCriterion("close_an_account <", value, "closeAnAccount");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountLessThanOrEqualTo(Date value) {
            addCriterion("close_an_account <=", value, "closeAnAccount");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountIn(List<Date> values) {
            addCriterion("close_an_account in", values, "closeAnAccount");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountNotIn(List<Date> values) {
            addCriterion("close_an_account not in", values, "closeAnAccount");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountBetween(Date value1, Date value2) {
            addCriterion("close_an_account between", value1, value2, "closeAnAccount");
            return (Criteria) this;
        }

        public Criteria andCloseAnAccountNotBetween(Date value1, Date value2) {
            addCriterion("close_an_account not between", value1, value2, "closeAnAccount");
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