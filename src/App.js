import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import {QueryClientProvider, QueryClient} from "react-query";

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Route path="/" component={HomePage} exact></Route>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
