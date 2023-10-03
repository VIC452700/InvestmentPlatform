const InputBox = (props: any) => {
    return (
        <div className="mt-1">
            <input
                id="email"
                name="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md bg-[#13263f] relative block w-full px-3 py-2 border border-gray-50 placeholder-gray-500 text-gray-50 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder={props.placeHolder}
            />
        </div>
    );
};

export default InputBox;

