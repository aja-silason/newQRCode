import React, { useState, useRef } from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import { RNCamera } from "react-native-camera";
import QRCodeScanner from "react-native-qrcode-scanner";

const App = () => {
  const QRCodeRef = useRef<QRCodeScanner | any>(null);
  const [link, setLink] = useState<string | any>("");

  const handleLink = () => {
    Linking.openURL(link).catch(() => {
      console.log("Ouve um erro");
    })

    QRCodeRef.current!.reactivate();
  }
  return(
    <QRCodeScanner
      ref={QRCodeRef}
      onRead={({data}) => setLink(data)}
      flashMode={RNCamera.Constants.FlashMode.off}
      topContent={
        <View>
          <Text>Conteudo Scanneado{link}</Text>
        </View>
      }
      bottomContent={
        <View>
          <TouchableOpacity style={{padding: 12, backgroundColor: "#ccc"}} onPress={handleLink}>
            <Text style={{color: "#fff"}}>Ir</Text>
          </TouchableOpacity>
        </View>
      }
    />
  )
}