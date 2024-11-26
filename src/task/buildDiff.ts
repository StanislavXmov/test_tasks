enum NodeTypes {
  Added,
  Deleted,
  Changed,
  Unchanged,
  Nested,
}

type Value = unknown;

type N =
  {
    type: NodeTypes.Added,
    key: string,
    newValue: Value,
  } |
  {
    type: NodeTypes.Deleted,
    key: string,
    oldValue: Value,
  } |
  {
    type: NodeTypes.Nested,
    key: string,
    children: N[],
  } |
  {
    type: NodeTypes.Changed,
    key: string,
    oldValue: Value,
    newValue: Value,
  } |
  {
    type: NodeTypes.Unchanged,
    key: string,
    value: Value,
  };

  const sort = (a: N, b: N) => {
    if (a.key > b.key) {
      return 1;
    } else if (a.key < b.key) {
      return -1;
    } else {
      return 0;
    }
  }

const buildDiff = (data1: Record<string, unknown>, data2: Record<string, unknown>): N[] => {
  const check = (obj1: Record<string, unknown>, obj2: Record<string, unknown>): N[] => {
    const keys = Object.keys(obj1);
    // Added
    const d: N[] = [];
    for (const key in obj2) {
      if (!(key in obj1)) {
        d.push({
          type: NodeTypes.Added,
          key,
          newValue: obj2[key],
        })
      }
    }
    const deletedKeys: string[] = [];
    // Deleted
    for (const key in obj1) {
      if (!(key in obj2)) {
        d.push({
          type: NodeTypes.Deleted,
          key,
          oldValue: obj1[key],
        });
        deletedKeys.push(key);
      }
    }
    
    deletedKeys.forEach(k => {
      const idx = keys.indexOf(k);
      keys.splice(idx, 1);
    });

    // Object
    keys.forEach(k => {
      if (typeof obj1[k] === "object" && !Array.isArray(obj1[k]) && typeof obj2[k] === "object" && !Array.isArray(obj2[k])) {
        d.push({
          type: NodeTypes.Nested,
          key: k,
          children: [...check(obj1[k] as Record<string, unknown>, obj2[k] as Record<string, unknown>)],
        });
      } else if ((typeof obj1[k] === "object" && !Array.isArray(obj1[k])) || (typeof obj2[k] === "object" && !Array.isArray(obj2[k]))) {
        d.push({
          type: NodeTypes.Changed,
          key: k,
          oldValue: obj1[k],
          newValue: obj2[k],
        });
      } else {
        if (obj1[k] === obj2[k]) {
          // Unchanged
          d.push({
            type: NodeTypes.Unchanged,
            key: k,
            value: obj1[k],
          });
        } else {
          d.push({
            type: NodeTypes.Changed,
            key: k,
            oldValue: obj1[k],
            newValue: obj2[k],
          });
        }
      }
    });

    d.sort(sort);

    return d;
  }
  
  return check(data1, data2);
};

// const buildDiff = (data1: Record<string, unknown>, data2: Record<string, unknown>): N[] => {
//   const check = (obj1: Record<string, unknown>, obj2: Record<string, unknown>, data: N[]): N[] => {
//     const keys = Object.keys(obj1);
//     // Added
//     const d: N[] = [];
//     for (const key in obj2) {
//       if (!(key in obj1)) {
//         d.push({
//           type: NodeTypes.Added,
//           key,
//           newValue: obj2[key],
//         })
//       }
//     }
//     const deletedKeys: string[] = [];
//     // Deleted
//     for (const key in obj1) {
//       if (!(key in obj2)) {
//         d.push({
//           type: NodeTypes.Deleted,
//           key,
//           oldValue: obj1[key],
//         });
//         deletedKeys.push(key);
//       }
//     }
    
//     deletedKeys.forEach(k => {
//       const idx = keys.indexOf(k);
//       keys.splice(idx, 1);
//     });

//     // Object
//     keys.forEach(k => {
//       if (typeof obj1[k] === "object" && !Array.isArray(obj1[k]) && typeof obj2[k] === "object" && !Array.isArray(obj2[k])) {
//         d.push({
//           type: NodeTypes.Nested,
//           key: k,
//           children: [...check(obj1[k] as Record<string, unknown>, obj2[k] as Record<string, unknown>, [])],
//         });
//       } else if ((typeof obj1[k] === "object" && !Array.isArray(obj1[k])) || (typeof obj2[k] === "object" && !Array.isArray(obj2[k]))) {
//         d.push({
//           type: NodeTypes.Changed,
//           key: k,
//           oldValue: obj1[k],
//           newValue: obj2[k],
//         });
//       } else {
//         if (obj1[k] === obj2[k]) {
//           // Unchanged
//           d.push({
//             type: NodeTypes.Unchanged,
//             key: k,
//             value: obj1[k],
//           });
//         } else {
//           d.push({
//             type: NodeTypes.Changed,
//             key: k,
//             oldValue: obj1[k],
//             newValue: obj2[k],
//           });
//         }
//       }
//     });

//     d.sort(sort);
//     data.push(...d);

//     return data;
//   }
  
//   return check(data1, data2, []);
// };

const data1 = {
  "common": {
    "setting1": "Value 1",
    "setting2": 200,
    "setting3": true,
    "setting6": {
      "key": "value",
      "doge": {
        "wow": "too much"
      }
    }
  },
  // "group1": {
  //   "baz": "bas",
  //   "foo": "bar",
  //   "nest": {
  //     "key": "value"
  //   }
  // },
  // "group2": {
  //   "abc": 12345,
  //   "deep": {
  //     "id": 45
  //   }
  // },
  // "group4": {
  //   "default": null,
  //   "foo": 0,
  //   "isNested": false,
  //   "nest": {
  //     "bar": "",
  //     "isNested": true
  //   },
  //   "type": "bas"
  // },
  // "language": "js"
}

const data2 = {
  "common": {
    "follow": false,
    "setting1": "Value 1",
    "setting3": {
      "key": "value"
    },
    "setting4": "blah blah",
    "setting5": {
      "key5": "value5"
    },
    "setting6": {
      "key": "value",
      "ops": "vops",
      "doge": {
        "wow": "so much"
      }
    }
  },

  // "group1": {
  //   "foo": "bar",
  //   "baz": "bars",
  //   "nest": "str"
  // },

  // "group3": {
  //   "deep": {
  //     "id": {
  //       "number": 45
  //     }
  //   },
  //   "fee": 100500
  // },

  // "group4": {
  //   "default": "",
  //   "foo": null,
  //   "isNested": "none",
  //   "key": false,
  //   "nest": {
  //     "bar": 0
  //   },
  //   "someKey": true,
  //   "type": "bar"
  // },
  
  // "language": "js"
}

console.log(buildDiff(data1, data2));

const result = [
  {
    "children": [
      {
        "key": "follow",
        "newValue": false,
        "type": 0
      },
      {
        "key": "setting1",
        "value": "Value 1",
        "type": 3
      },
      {
        "key": "setting2",
        "oldValue": 200,
        "type": 1
      },
      {
        "key": "setting3",
        "newValue": {
          "key": "value"
        },
        "oldValue": true,
        "type": 2
      },
      {
        "key": "setting4",
        "newValue": "blah blah",
        "type": 0
      },
      {
        "key": "setting5",
        "newValue": {
          "key5": "value5"
        },
        "type": 0
      },
      {
        "children": [
          {
            "children": [
              {
                "key": "wow",
                "newValue": "so much",
                "oldValue": "too much",
                "type": 2
              }
            ],
            "key": "doge",
            "type": 4
          },
          {
            "key": "key",
            "value": "value",
            "type": 3
          },
          {
            "key": "ops",
            "newValue": "vops",
            "type": 0
          }
        ],
        "key": "setting6",
        "type": 4
      }
    ],
    "key": "common",
    "type": 4
  },
  // {
  //   "children": [
  //     {
  //       "key": "baz",
  //       "newValue": "bars",
  //       "oldValue": "bas",
  //       "type": 2
  //     },
  //     {
  //       "key": "foo",
  //       "value": "bar",
  //       "type": 3
  //     },
  //     {
  //       "key": "nest",
  //       "newValue": "str",
  //       "oldValue": {
  //         "key": "value"
  //       },
  //       "type": 2
  //     }
  //   ],
  //   "key": "group1",
  //   "type": 4
  // },
  // {
  //   "key": "group2",
  //   "oldValue": {
  //     "abc": 12345,
  //     "deep": {
  //       "id": 45
  //     }
  //   },
  //   "type": 1
  // },
  // {
  //   "key": "group3",
  //   "newValue": {
  //     "deep": {
  //       "id": {
  //         "number": 45
  //       }
  //     },
  //     "fee": 100500
  //   },
  //   "type": 0
  // },
  // {
  //   "children": [
  //     {
  //       "key": "default",
  //       "newValue": "",
  //       "oldValue": null,
  //       "type": 2
  //     },
  //     {
  //       "key": "foo",
  //       "newValue": null,
  //       "oldValue": 0,
  //       "type": 2
  //     },
  //     {
  //       "key": "isNested",
  //       "newValue": "none",
  //       "oldValue": false,
  //       "type": 2
  //     },
  //     {
  //       "key": "key",
  //       "newValue": false,
  //       "type": 0
  //     },
  //     {
  //       "children": [
  //         {
  //           "key": "bar",
  //           "newValue": 0,
  //           "oldValue": "",
  //           "type": 2
  //         },
  //         {
  //           "key": "isNested",
  //           "oldValue": true,
  //           "type": 1
  //         }
  //       ],
  //       "key": "nest",
  //       "type": 4
  //     },
  //     {
  //       "key": "someKey",
  //       "newValue": true,
  //       "type": 0
  //     },
  //     {
  //       "key": "type",
  //       "newValue": "bar",
  //       "oldValue": "bas",
  //       "type": 2
  //     }
  //   ],
  //   "key": "group4",
  //   "type": 4
  // },
  // {
  //   "key": "language",
  //   "value": "js",
  //   "type": 3
  // }
]

console.log(result);
