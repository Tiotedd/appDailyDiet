import AsyncStorage from "@react-native-async-storage/async-storage";

export async function mealGetAllSectionByKey() {

  try {
    const storageKeys = await AsyncStorage.getAllKeys()
    const meal = storageKeys !== undefined
      ? await Promise.all(
          storageKeys.map(async (key) => {
            const data = await AsyncStorage.getItem(key)
            if (data !== null) {
              return {
                date: key,
                data: JSON.parse(data)
              }
            }
          })
        )
      : []
      const result = meal??[]
    return result
  } catch (error) {
    throw error
    console.log('error em buscar as refeições')
  }
}