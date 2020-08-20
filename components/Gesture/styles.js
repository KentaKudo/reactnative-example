import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ghostwhite",
  },

  scroll: {
    height: 1,
    alignSelf: "stretch",
  },

  scrollItem: {
    margin: 20,
    alignSelf: "center",
  },

  button: {
    padding: 10,
    margin: 5,
    backgroundColor: "azure",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "slategray",
  },

  buttonText: {
    color: "slategrey",
  },

  swipeContainer: {
    flex: 1,
    flexDirection: "row",
    width: 200,
    height: 30,
    marginTop: 50,
  },

  swipeItem: {
    width: 200,
    height: 30,
    backgroundColor: "azure",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "slategrey",
  },

  swipeItemText: {
    textAlign: "center",
    color: "slategrey",
  },

  swipeBlank: {
    width: 200,
    height: 30,
  },
});
