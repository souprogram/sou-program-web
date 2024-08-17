export default function JoinForm() {
  return (
    <form className="w-full max-w-screen-xl mx-auto">
      <div className="flex flex-col space-y-8">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
            placeholder="Name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
            placeholder="Email"
          />
        </div>

        {/* OIB (osobni identifikacijski broj) */}
        <div className="mt-4">
          <label
            htmlFor="oib"
            className="block text-sm font-medium text-gray-700"
          >
            OIB
          </label>
          <input
            type="text"
            name="oib"
            id="oib"
            className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
            placeholder="OIB"
          />
        </div>

        {/* Datum rodenja */}
        <div className="mt-4">
          <label
            htmlFor="dateOfBirth"
            className="block text-sm font-medium text-gray-700"
          >
            Datum rođenja
          </label>
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
            placeholder="Datum rodenja"
          />
        </div>

        {/* Jesi student? */}
        <div className="mt-4">
          <div className="mt-2 flex items-center">
            <input
              id="isStudent"
              name="isStudent"
              type="checkbox"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label
              htmlFor="isStudent"
              className="ml-2 block text-sm text-gray-700"
            >
              Ja sam student
            </label>
          </div>
        </div>

        {/* Uloga - multiple checkboxes - pick at least one */}
        <div className="mt-4">
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            Uloga{' '}
            <span className="text-gray-500 font-normal">
              (izaberite barem jednu)
            </span>
          </label>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <div className="flex items-center">
              <input
                id="role-2"
                name="role"
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label
                htmlFor="role-2"
                className="ml-2 block text-sm text-gray-700"
              >
                Programer
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="role-3"
                name="role"
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label
                htmlFor="role-3"
                className="ml-2 block text-sm text-gray-700"
              >
                Web developer
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="role-4"
                name="role"
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label
                htmlFor="role-4"
                className="ml-2 block text-sm text-gray-700"
              >
                Designer
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="role-5"
                name="role"
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label
                htmlFor="role-5"
                className="ml-2 block text-sm text-gray-700"
              >
                Tester
              </label>
            </div>
          </div>
        </div>

        {/* Discord username */}
        <div className="mt-4">
          <label
            htmlFor="discordUsername"
            className="block text-sm font-medium text-gray-700"
          >
            Discord username
          </label>
          <input
            type="text"
            name="discordUsername"
            id="discordUsername"
            className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
            placeholder="Discord username"
          />
        </div>

        {/* Broj mobitela */}
        <div className="mt-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Broj mobitela
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
            placeholder="Broj mobitela"
          />
        </div>

        {/* Gdje stanuju/presjedavaju */}
        <div className="mt-4">
          <label
            htmlFor="whereDoYouWork"
            className="block text-sm font-medium text-gray-700"
          >
            Gdje stanuju/presjedavaju
          </label>
          <input
            type="text"
            name="whereDoYouWork"
            id="whereDoYouWork"
            className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
            placeholder="Gdje stanuju/presjedavaju"
          />
        </div>

        <div className="mt-4">
          <div className="mt-2 flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              I am completely sure that I want to join the community.
            </label>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
