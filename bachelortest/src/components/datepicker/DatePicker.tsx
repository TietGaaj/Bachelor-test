
import '../../index.css'



export const DatePicker = (props:any) => {
    
    return(
    <div className="flex items-center justify-center">
  <div className="datepicker relative form-floating mb-3 xl:w-96">
    <input type="date"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="Select a date"/>
    <label htmlFor="floatingInput" className="text-gray-700">Date lost ?</label>
  </div>
</div>
)
}

//Noget af koden er kopieret fra https://tailwind-elements.com/docs/standard/forms/datepicker/