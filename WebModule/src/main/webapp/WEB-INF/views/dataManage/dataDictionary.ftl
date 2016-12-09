<script src="${domainUrl}/assets/js/TotalModule/dataManage/dataDictionary.js"></script>
<style>
    #dataMian{
        width: 100%;
        height: 100%;
        display: flex;
    }
    #dataLeft{
        width: 15%;
        height: 100%;
        background-color: #1b6d85;
    }
    #dataRight{
        width: 85%;
        height: 100%;
        background-color: #00ff00;
    }
</style>
<div id="dataMian">
    <div id="dataLeft">
        <ul id="dataFather">

        </ul>
        <button onclick="add()">添加</button>
        <input type="text" id="dataName">
    </div>
    <div id="dataRight">
        <ul id="dataSon">

        </ul>
        <button onclick="addSon()">添加</button>
        <input type="text" id="dataNameSon">
        <input type="text" id="leaveSon" style="display: none;">
    </div>


</div>