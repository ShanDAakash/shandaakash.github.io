var APP_DATA = {
  "scenes": [
    {
      "id": "0-bedroom-door",
      "name": "bedroom door",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9988621863856206,
          "pitch": 0.13633394835621537,
          "rotation": 0,
          "target": "1-family-living"
        },
        {
          "yaw": -0.6901272444760114,
          "pitch": 0.041691391140867395,
          "rotation": 0,
          "target": "2-entry"
        },
        {
          "yaw": 0.336564089526334,
          "pitch": 0.2293006592137541,
          "rotation": 0,
          "target": "3-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-family-living",
      "name": "family living",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.716274052611471,
          "pitch": -0.03540815625281368,
          "rotation": 0,
          "target": "2-entry"
        },
        {
          "yaw": 1.6524167365756686,
          "pitch": -0.06247882703773655,
          "rotation": 0,
          "target": "0-bedroom-door"
        },
        {
          "yaw": 1.5280160898742228,
          "pitch": 0.10744002773152417,
          "rotation": 0,
          "target": "3-living"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.898815542803014,
          "pitch": 0.31328554981363155,
          "title": "Seating",
          "text": "Seating &amp; drawer at the bottom"
        }
      ]
    },
    {
      "id": "2-entry",
      "name": "entry",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.393681863712438
      },
      "linkHotspots": [
        {
          "yaw": 0.7106932297696762,
          "pitch": 0.15130010377698078,
          "rotation": 0,
          "target": "1-family-living"
        },
        {
          "yaw": 0.0427776088028331,
          "pitch": -0.024009920260240847,
          "rotation": 0,
          "target": "0-bedroom-door"
        },
        {
          "yaw": -0.8871165782754051,
          "pitch": 0.15897963474632348,
          "rotation": 0,
          "target": "3-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living",
      "name": "living",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.381973258721267,
          "pitch": -0.0444204756418074,
          "rotation": 0,
          "target": "1-family-living"
        },
        {
          "yaw": -0.5908025796239347,
          "pitch": -0.09406361674565034,
          "rotation": 0,
          "target": "2-entry"
        },
        {
          "yaw": -1.8160465838434128,
          "pitch": -0.09984623973253548,
          "rotation": 0,
          "target": "0-bedroom-door"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "JML 11A",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
