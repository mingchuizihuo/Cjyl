package com.web;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * Created by xiao on 2016/12/14.
 */
public class DataTest {
    public static void main(String[] args) throws ParseException {

        Calendar cal_1=Calendar.getInstance();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        cal_1.setTime(simpleDateFormat.parse("2016-02-01"));

        System.out.println( cal_1.get(Calendar.MONTH));


    }
}
