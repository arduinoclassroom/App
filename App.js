import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { Stack, ActivityIndicator } from "@react-native-material/core";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import { db, ref } from "./firebase";
import { getDatabase, set, onValue } from "firebase/database";
import BottomSheet from "./component/BottomSheet";
import { FirebaseError } from "firebase/app";

export default function App() {
  const [imagePath1, setImagePath1] = useState(require("./img/bulb_on.png"));
  const [imagePath2, setImagePath2] = useState(require("./img/bulb_on.png"));
  const [imagePath3, setImagePath3] = useState(require("./img/bulb_on.png"));
  const [imagePath4, setImagePath4] = useState(require("./img/bulb_on.png"));
  const [imagePath5, setImagePath5] = useState(require("./img/bulb_on.png"));
  const [imagePath6, setImagePath6] = useState(require("./img/bulb_on.png"));

  const [bulbName1, setName1] = useState("Light 1");
  const [bulbName2, setName2] = useState("Light 2");
  const [bulbName3, setName3] = useState("Light 3");
  const [bulbName4, setName4] = useState("Light 4");
  const [bulbName5, setName5] = useState("Light 5");
  const [bulbName6, setName6] = useState("Light 6");

  const [isBottomSheetVisible1, setBottomSheetVisible1] = useState(false);
  const [isBottomSheetVisible2, setBottomSheetVisible2] = useState(false);
  const [isBottomSheetVisible3, setBottomSheetVisible3] = useState(false);
  const [isBottomSheetVisible4, setBottomSheetVisible4] = useState(false);
  const [isBottomSheetVisible5, setBottomSheetVisible5] = useState(false);
  const [isBottomSheetVisible6, setBottomSheetVisible6] = useState(false);

  const [firebaseState, setfirebaseState] = useState(false);

  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);
  const [status4, setStatus4] = useState(false);
  const [status5, setStatus5] = useState(false);
  const [status6, setStatus6] = useState(false);

  const db = getDatabase();

  useEffect(() => {
    const starCountRef = ref(db, "swiches/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setStatus1(data.L1.status);
      setStatus2(data.L2.status);
      setStatus3(data.L3.status);
      setStatus4(data.L4.status);
      setStatus5(data.L5.status);
      setStatus6(data.L6.status);

      setName1(data.N1.N1);
      setName2(data.N2.N2);
      setName3(data.N3.N3);
      setName4(data.N4.N4);
      setName5(data.N5.N5);
      setName6(data.N6.N6);
      setfirebaseState(true);
    });
  }, []);

  const changeName1 = () => {
    setBottomSheetVisible1(!isBottomSheetVisible1);
    if (isBottomSheetVisible1) {
      set(ref(db, "swiches/N1/"), {
        N1: bulbName1,
      });
    }
  };

  const changeName2 = () => {
    setBottomSheetVisible2(!isBottomSheetVisible2);
    if (isBottomSheetVisible2) {
      set(ref(db, "swiches/N2/"), {
        N2: bulbName2,
      });
    }
  };

  const changeName3 = () => {
    setBottomSheetVisible3(!isBottomSheetVisible3);
    if (isBottomSheetVisible3) {
      set(ref(db, "swiches/N3/"), {
        N3: bulbName3,
      });
    }
  };

  const changeName4 = () => {
    setBottomSheetVisible4(!isBottomSheetVisible4);
    if (isBottomSheetVisible4) {
      set(ref(db, "swiches/N4/"), {
        N4: bulbName4,
      });
    }
  };
  const changeName5 = () => {
    setBottomSheetVisible5(!isBottomSheetVisible5);
    if (isBottomSheetVisible5) {
      set(ref(db, "swiches/N5/"), {
        N5: bulbName5,
      });
    }
  };
  const changeName6 = () => {
    setBottomSheetVisible6(!isBottomSheetVisible6);
    if (isBottomSheetVisible6) {
      set(ref(db, "swiches/N6/"), {
        N6: bulbName6,
      });
    }
  };

  const changeImage1 = () => {
    setStatus1(!status1);
    set(ref(db, "swiches/L1/"), {
      status: !status1,
    });
  };

  const changeImage2 = () => {
    setStatus2(!status2);
    set(ref(db, "swiches/L2/"), {
      status: !status2,
    });
  };

  const changeImage3 = () => {
    setStatus3(!status3);
    set(ref(db, "swiches/L3/"), {
      status: !status3,
    });
  };

  const changeImage4 = () => {
    setStatus4(!status4);
    set(ref(db, "swiches/L4/"), {
      status: !status4,
    });
  };

  const changeImage5 = () => {
    setStatus5(!status5);
    set(ref(db, "swiches/L5/"), {
      status: !status5,
    });
  };

  const changeImage6 = () => {
    setStatus6(!status6);
    set(ref(db, "swiches/L6/"), {
      status: !status6,
    });
  };

  useEffect(() => {
    setImagePath1(
      status1 ? require("./img/bulb_on.png") : require("./img/bulb_off.png")
    );
  }, [status1]);

  useEffect(() => {
    setImagePath2(
      status2 ? require("./img/bulb_on.png") : require("./img/bulb_off.png")
    );
  }, [status2]);

  useEffect(() => {
    setImagePath3(
      status3 ? require("./img/bulb_on.png") : require("./img/bulb_off.png")
    );
  }, [status3]);

  useEffect(() => {
    setImagePath4(
      status4 ? require("./img/bulb_on.png") : require("./img/bulb_off.png")
    );
  }, [status4]);

  useEffect(() => {
    setImagePath5(
      status5 ? require("./img/bulb_on.png") : require("./img/bulb_off.png")
    );
  }, [status5]);

  useEffect(() => {
    setImagePath6(
      status6 ? require("./img/bulb_on.png") : require("./img/bulb_off.png")
    );
  }, [status6]);

  return (
    <View>
      <BottomSheet
        visible={isBottomSheetVisible1}
        onClose={changeName1}
        bulbName={bulbName1}
        setName={setName1}
      />
      <BottomSheet
        visible={isBottomSheetVisible2}
        onClose={changeName2}
        bulbName={bulbName2}
        setName={setName2}
      />
      <BottomSheet
        visible={isBottomSheetVisible3}
        onClose={changeName3}
        bulbName={bulbName3}
        setName={setName3}
      />
      <BottomSheet
        visible={isBottomSheetVisible4}
        onClose={changeName4}
        bulbName={bulbName4}
        setName={setName4}
      />
      <BottomSheet
        visible={isBottomSheetVisible5}
        onClose={changeName5}
        bulbName={bulbName5}
        setName={setName5}
      />
      <BottomSheet
        visible={isBottomSheetVisible6}
        onClose={changeName6}
        bulbName={bulbName6}
        setName={setName6}
      />
      <StatusBar style="auto" />
      <View style={styles.container}>
        <TouchableOpacity onPress={changeImage1} onLongPress={changeName1}>
          <Image style={styles.img} source={imagePath1} />
          <Text style={styles.text}>{bulbName1}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeImage2} onLongPress={changeName2}>
          <Image style={styles.img} source={imagePath2} />
          <Text style={styles.text}>{bulbName2}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeImage3} onLongPress={changeName3}>
          <Image style={styles.img} source={imagePath3} />
          <Text style={styles.text}>{bulbName3}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={changeImage4} onLongPress={changeName4}>
          <Image style={styles.img} source={imagePath4} />
          <Text style={styles.text}>{bulbName4}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeImage5} onLongPress={changeName5}>
          <Image style={styles.img} source={imagePath5} />
          <Text style={styles.text}>{bulbName5}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={changeImage6} onLongPress={changeName6}>
          <Image style={styles.img} source={imagePath6} />
          <Text style={styles.text}>{bulbName6}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 305 }}>
        {!firebaseState && (
          <ActivityIndicator
            style={{ alignItems: "center" }}
            size={"large"}
            color="0000"
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
  color: {
    textAlign: "center",
    color: "dodgerblue",
    fontWeight: 500,
    borderColor: "deepskyblue",
    borderWidth: 2,
    borderRadius: 8,
    padding: 5,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginTop: 30,
    marginLeft: 20,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    borderRadius: 10,
  },
  text: {
    marginLeft: 20,
    fontWeight: 500,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: "center",
    color: "red",
  },
  firebaseState: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 300,
  },
});
