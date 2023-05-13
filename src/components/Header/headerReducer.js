import initialStore from "../../redux/initialStore";

const dataHeader = (data = initialStore.dataHeader, action) => {
  switch (action.type) {
    default:
      return data;
  }
}

export default dataHeader;