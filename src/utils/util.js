//function to format data based on parent_objective_id
export function formatOkrData(okrData) {
  let result = [];
  okrData.forEach((val) => {
    if (val.parent_objective_id === "") {
      result.push({
        ...val,
        children: okrData.filter(
          (record) => val.id === record.parent_objective_id
        ),
      });
    }
  });
  return result;
}

//funtion to get catrgory list for filters
export function getCategoryList(okrData) {
  return [...new Set(okrData.map((val) => val.category))];
}

//funtion to calculate height based on the children length
export function calculateHeight(children) {
  return children.length * 60 + "px";
}

//filter okr data based on selected filter
export function filterOkrData(okrData, category) {
  return okrData.filter((val) => val.category === category);
}
