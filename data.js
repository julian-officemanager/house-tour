var APP_DATA = {
  "scenes": [
    {
      "id": "0-toilet",
      "name": "Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0392692195717395,
          "pitch": 1.1403646036391883,
          "rotation": 1.5707963267948966,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.04646692170519273,
        "pitch": 0.26873763226825886,
        "fov": 1.495674328141688
      },
      "linkHotspots": [
        {
          "yaw": -0.26921242800116296,
          "pitch": 0.3796424032509105,
          "rotation": 4.71238898038469,
          "target": "0-toilet"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Hall tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
