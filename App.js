import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { ActivityIndicator } from "@react-native-material/core";
import Dialog from "react-native-dialog";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { PlatformColor } from "react-native";
import { db, ref } from "./firebase";
import { getDatabase, set, onValue } from "firebase/database";
import * as Haptics from "expo-haptics";

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

  const [firebaseState, setfirebaseState] = useState(false);

  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);
  const [status4, setStatus4] = useState(false);
  const [status5, setStatus5] = useState(false);
  const [status6, setStatus6] = useState(false);

  const [defaultName, setdefaultName] = useState("");

  const [dialogVisible1, setDialogVisible1] = useState(false);
  const [dialogVisible2, setDialogVisible2] = useState(false);
  const [dialogVisible3, setDialogVisible3] = useState(false);
  const [dialogVisible4, setDialogVisible4] = useState(false);
  const [dialogVisible5, setDialogVisible5] = useState(false);
  const [dialogVisible6, setDialogVisible6] = useState(false);

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
    setdefaultName(bulbName1);
    setDialogVisible1(!dialogVisible1);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  };

  const changeName2 = () => {
    setdefaultName(bulbName2);
    setDialogVisible2(!dialogVisible2);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  };

  const changeName3 = () => {
    setdefaultName(bulbName3);
    setDialogVisible3(!dialogVisible3);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  };
  const changeName4 = () => {
    setdefaultName(bulbName4);
    setDialogVisible4(!dialogVisible4);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  };
  const changeName5 = () => {
    setdefaultName(bulbName5);
    setDialogVisible5(!dialogVisible5);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  };
  const changeName6 = () => {
    setdefaultName(bulbName6);
    setDialogVisible6(!dialogVisible6);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  };

  const changeImage1 = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setStatus1(!status1);
    set(ref(db, "swiches/L1/"), {
      status: !status1,
    });
  };

  const changeImage2 = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setStatus2(!status2);
    set(ref(db, "swiches/L2/"), {
      status: !status2,
    });
  };

  const changeImage3 = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setStatus3(!status3);
    set(ref(db, "swiches/L3/"), {
      status: !status3,
    });
  };

  const changeImage4 = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setStatus4(!status4);
    set(ref(db, "swiches/L4/"), {
      status: !status4,
    });
  };

  const changeImage5 = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setStatus5(!status5);
    set(ref(db, "swiches/L5/"), {
      status: !status5,
    });
  };

  const changeImage6 = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
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

  const cancel1 = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setDialogVisible1(!dialogVisible1);
    setName1(defaultName);
    setdefaultName("");
  };

  const cancel2 = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setDialogVisible2(!dialogVisible2);
    setName2(defaultName);
    setdefaultName("");
  };

  const cancel3 = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setDialogVisible3(!dialogVisible3);
    setName3(defaultName);
    setdefaultName("");
  };

  const cancel4 = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setDialogVisible4(!dialogVisible4);
    setName4(defaultName);
    setdefaultName("");
  };
  
  const cancel5 = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setDialogVisible5(!dialogVisible5);
    setName5(defaultName);
    setdefaultName("");
  };
  const cancel6 = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setDialogVisible6(!dialogVisible6);
    setName6(defaultName);
    setdefaultName("");
  };

  const ok1 = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setDialogVisible1(!dialogVisible1);
    if (dialogVisible1) {
      set(ref(db, "swiches/N1/"), {
        N1: bulbName1,
      });
    }
  };
  const ok2 = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setDialogVisible2(!dialogVisible2);
    if (dialogVisible2) {
      set(ref(db, "swiches/N2/"), {
        N2: bulbName2,
      });
    }
  };
  const ok3 = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setDialogVisible3(!dialogVisible3);
    if (dialogVisible3) {
      set(ref(db, "swiches/N3/"), {
        N3: bulbName3,
      });
    }
  };
  const ok4 = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setDialogVisible4(!dialogVisible4);
    if (dialogVisible4) {
      set(ref(db, "swiches/N4/"), {
        N4: bulbName4,
      });
    }
  };
  const ok5 = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setDialogVisible5(!dialogVisible5);
    if (dialogVisible5) {
      set(ref(db, "swiches/N5/"), {
        N5: bulbName5,
      });
    }
  };
  const ok6 = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setDialogVisible6(!dialogVisible6);
    if (dialogVisible6) {
      set(ref(db, "swiches/N6/"), {
        N6: bulbName6,
      });
    }
  };

  return (
    <View>
      <Dialog.Container visible={dialogVisible1}>
        <Dialog.Title>Rename Your Bulb</Dialog.Title>
        <Dialog.Input
          onChangeText={setName1}
          maxLength={11}
          value={bulbName1}
        />
        <Dialog.Button label="Cancel" onPress={cancel1} />
        <Dialog.Button label="OK" onPress={ok1} />
      </Dialog.Container>
      <Dialog.Container visible={dialogVisible2}>
        <Dialog.Title>Rename Your Bulb</Dialog.Title>
        <Dialog.Input
          onChangeText={setName2}
          maxLength={11}
          value={bulbName2}
        />
        <Dialog.Button label="Cancel" onPress={cancel2} />
        <Dialog.Button label="OK" onPress={ok2} />
      </Dialog.Container>
      <Dialog.Container visible={dialogVisible3}>
        <Dialog.Title>Rename Your Bulb</Dialog.Title>
        <Dialog.Input
          onChangeText={setName3}
          maxLength={11}
          value={bulbName3}
        />
        <Dialog.Button label="Cancel" onPress={cancel3} />
        <Dialog.Button label="OK" onPress={ok3} />
      </Dialog.Container>

      <Dialog.Container visible={dialogVisible4}>
        <Dialog.Title>Rename Your Bulb</Dialog.Title>
        <Dialog.Input
          onChangeText={setName4}
          maxLength={11}
          value={bulbName4}
        />
        <Dialog.Button label="Cancel" onPress={cancel4} />
        <Dialog.Button label="OK" onPress={ok4} />
      </Dialog.Container>
      <Dialog.Container visible={dialogVisible5}>
        <Dialog.Title>Rename Your Bulb</Dialog.Title>
        <Dialog.Input
          onChangeText={setName5}
          maxLength={11}
          value={bulbName5}
        />
        <Dialog.Button label="Cancel" onPress={cancel5} />
        <Dialog.Button label="OK" onPress={ok5} />
      </Dialog.Container>

      <Dialog.Container visible={dialogVisible6}>
        <Dialog.Title>Rename Your Bulb</Dialog.Title>
        <Dialog.Input
          onChangeText={setName6}
          maxLength={11}
          value={bulbName6}
        />
        <Dialog.Button label="Cancel" onPress={cancel6} />
        <Dialog.Button label="OK" onPress={ok6} />
      </Dialog.Container>

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
    justifyContent: "center",
  },
  color: {
    textAlign: "center",
    color: "dodgerblue",
    fontWeight: "500",
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
    margin: 10,
  },

  box: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    borderRadius: 10,
  },
  text: {
    fontWeight: "500",
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
