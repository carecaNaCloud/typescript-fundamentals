
// Generics are generic types that is defined at 'runtime'

function exemple<Type>(param: Type) : Type{
  return param;
}

const iDontKnowWhatIsTheTypeOfArgs = <Qualquer>(param: Qualquer) : Qualquer => {
  return param;
}

// Commonly used in react code to differentiate from html, jsx tags
const commonUsage = <T, >(args: T) : T => {
  return args;
}
