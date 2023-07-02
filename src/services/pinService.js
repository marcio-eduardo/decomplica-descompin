/**
 * 
 * getFolders()
 * saveFolder()
 * savePinFolder
 */

export const getFolders = async () => {
  return JSON.parse(localStorage.getItem('folders')) || []
}

export const saveFolder = async () => {
  /**
   * Pegar lista de pastas -> getFolders()
   * Adicionar a pasta dentro desse array
   * Salvar novamente no localStorage
   */

  const folders = await getFolders();
  console.log('Estou funcionando!!!')
}
