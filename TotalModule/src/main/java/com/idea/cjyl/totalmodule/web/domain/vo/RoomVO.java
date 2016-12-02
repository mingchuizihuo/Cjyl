package com.idea.cjyl.totalmodule.web.domain.vo;

import com.idea.cjyl.totalmodule.web.domain.pojo.Bed;

import java.util.List;

/**
 * Created by Administrator on 2016/12/2.
 */
public class RoomVO {

    private Long id;

    private Long organizationLoginId;

    private Long floorTierId;

    private String roomNum;

    private Byte roomType;

    private List<Bed> bedList;

    @Override
    public String toString() {
        return "RoomVO{" +
                "id=" + id +
                ", organizationLoginId=" + organizationLoginId +
                ", floorTierId=" + floorTierId +
                ", roomNum='" + roomNum + '\'' +
                ", roomType=" + roomType +
                ", bedList=" + bedList +
                '}';
    }

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

    public Long getFloorTierId() {
        return floorTierId;
    }

    public void setFloorTierId(Long floorTierId) {
        this.floorTierId = floorTierId;
    }

    public String getRoomNum() {
        return roomNum;
    }

    public void setRoomNum(String roomNum) {
        this.roomNum = roomNum;
    }

    public Byte getRoomType() {
        return roomType;
    }

    public void setRoomType(Byte roomType) {
        this.roomType = roomType;
    }

    public List<Bed> getBedList() {
        return bedList;
    }

    public void setBedList(List<Bed> bedList) {
        this.bedList = bedList;
    }
}
