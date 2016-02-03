
var CustomerController = {
  find : function(req, res) {
    console.log('Inside server Customer.find method');
    var json = {
      "id": 6,
      "name": "HPE Arcsight",
      "schema_name": "_VkfoVdFLl",
      "bl": null,
      "wl": null,
      "sw_version": "1.0.1",
      "status": "ACTIVE",
      "createdAt": "2015-12-28T00:42:41.000Z",
      "updatedAt": "2016-01-06T22:55:30.000Z",
      "device": [{
        "serial_no": "2UA45215GP",
        "tag": "MARLON",
        "sw_version": "0.1",
        "conf_version": "0",
        "device_conf": "0",
        "customer_id": 6,
        "createdAt": "2015-07-18T15:31:41.000Z",
        "updatedAt": "2015-07-18T15:31:41.000Z"
      }, {
        "serial_no": "2UA45215GQ",
        "tag": null,
        "sw_version": "",
        "conf_version": "1.2.0",
        "device_conf": "lorem",
        "customer_id": 6,
        "createdAt": "2015-08-16T10:35:51.000Z",
        "updatedAt": "2015-08-16T10:35:51.000Z"
      }, {
        "serial_no": "raspi1",
        "tag": "raspberry pi",
        "sw_version": "",
        "conf_version": "1.2.0",
        "device_conf": "lorem",
        "customer_id": 6,
        "createdAt": "2015-10-22T21:38:45.000Z",
        "updatedAt": "2015-11-05T05:36:28.000Z"
      }, {
        "serial_no": "winzotac",
        "tag": "WinZotac",
        "sw_version": "",
        "conf_version": "1.2.0",
        "device_conf": "lorem",
        "customer_id": 6,
        "createdAt": "2015-12-05T02:23:24.000Z",
        "updatedAt": "2015-12-06T01:06:52.000Z"
      }, {
        "serial_no": "JAIMX53Y6",
        "tag": "POC Zotak",
        "sw_version": "",
        "conf_version": "1.2.0",
        "device_conf": "lorem",
        "customer_id": 6,
        "createdAt": "2016-01-13T19:56:26.240Z",
        "updatedAt": "2016-01-13T19:58:12.000Z"
      }, {
        "serial_no": "awscana1",
        "tag": "AWS1",
        "sw_version": "",
        "conf_version": "1.2.0",
        "device_conf": "lorem",
        "customer_id": 6,
        "createdAt": "2015-09-26T01:18:49.000Z",
        "updatedAt": "2015-09-26T01:55:53.000Z"
      }, {
        "serial_no": "zotac1",
        "tag": "zotac",
        "sw_version": "",
        "conf_version": "1.2.0",
        "device_conf": "lorem",
        "customer_id": 6,
        "createdAt": "2015-11-03T01:25:13.000Z",
        "updatedAt": "2015-11-21T00:50:06.000Z"
      }, {
        "serial_no": "awscanalinux1",
        "tag": "LINUX AWS",
        "sw_version": "",
        "conf_version": "1.2.0",
        "device_conf": "lorem",
        "customer_id": 6,
        "createdAt": "2015-10-17T00:35:47.000Z",
        "updatedAt": "2015-10-17T01:17:21.000Z"
      }, {
        "serial_no": "awscana",
        "tag": "Company_MSSP#1",
        "sw_version": "",
        "conf_version": "1.2.0",
        "device_conf": "lorem",
        "customer_id": 6,
        "createdAt": "2015-08-28T02:26:18.000Z",
        "updatedAt": "2015-10-15T01:44:21.000Z"
      }, {
        "serial_no": "chipzotac",
        "tag": "Chip&amp;amp;apos;s Zotac",
        "sw_version": "",
        "conf_version": "1.2.0",
        "device_conf": "lorem",
        "customer_id": 6,
        "createdAt": "2016-01-05T16:44:36.772Z",
        "updatedAt": "2016-01-13T07:38:13.000Z"
      }]
    };
    res.json(json);
  }
};


module.exports = CustomerController;
