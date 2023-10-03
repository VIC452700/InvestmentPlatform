import Button from '../components/Button';
import InputBox from '../components/InputBox';

const Withdraw = (props: any) => {
  return (
    <div className="mt-4 mx-3 w-7/10">
        <div className="bg-[#13212c] py-8 px-4 shadow sm:rounded-2xl sm:px-10">
          <div className="space-y-6">
            <div>
              <label className="block text-xl font-medium text-white my-4">
                Withdraw Method
              </label>
              <div className='text-white columns-2 gap-0 text-center text-3xl appearance-none rounded-md bg-[#13263f] relative block w-full border border-gray-50 placeholder-gray-500 text-gray-50 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'>
                <div className="flex items-center pl-4 rounded dark:border-gray-700">
                <input
                    id="bordered-radio-1"
                    type="radio"
                    value=""
                    name="bordered-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="bordered-radio-1" className="py-1 ml-3 text-base font-medium">
                    USDT
                </label>
                </div>
                <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                    <input
                        checked
                        id="bordered-radio-2"
                        type="radio"
                        value=""
                        name="bordered-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="bordered-radio-2" className="py-1 ml-3 text-base font-medium text-gray-900 dark:text-gray-300">
                        TRX
                    </label>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xl font-medium text-white my-3">
                Withdraw Amount
              </label>
              <InputBox placeHolder="Minimum value - 5"/>
            </div>
            <div className='py-6'>
              <Button name="Withdraw" handleClick={console.log("withdraw")} />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Withdraw;
