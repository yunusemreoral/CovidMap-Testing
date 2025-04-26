import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { render,screen } from "@testing-library/react";
import Head from "../pages/detail/head";
import {mockData} from "../utils/constants";

// redux kullanan bileşenler için sahete store'lar oluşturmamızı sağlayacak fonksiyon
const mockStore = configureStore([thunk]);

it("store yüklenme durumundayken ekrana loader basılır", () => {
    // yükleme durumunda sahte bir store oluştur
    const store = mockStore({isLoading: true, error: null, data: null });

    // bileşeni renderle
    render(
    <Provider store={store} >
        <BrowserRouter>
    <Head/>
    </BrowserRouter>
    </Provider>
    );

    // ekranda loader var mı?
    screen.getByTestId("head-loader");
    });


    it("store yüklenme bittiğinde loader ekrandan gider", () => {
        // yükleme durumunda sahte bir store oluştur
        const store = mockStore({isLoading: false, error: null, data: null });
    
        // bileşeni renderle
        render(
        <Provider store={store} >
            <BrowserRouter>
        <Head/>
        </BrowserRouter>
        </Provider>
        );
    
        // ekranda loader yok mı?
        const element = screen.queryByTestId("head-loader");
        expect(element).toBeNull();
        });

    it("store'a veri geldiğinde ekrana ülke ve bayrak verisi basılır", () => {
// sahte store oluştur
const store = mockStore({isLoading: false, error: null, data: mockData });

// bileşeni renderle
render(
    <Provider store={store} >
        <BrowserRouter>
    <Head/>
    </BrowserRouter>
    </Provider>
    );

    // ülke ismi ekrana geliyor mu?
    screen.getByRole("heading", {name: mockData.country });

    // resim ekranda mı
    const img = screen.getByAltText(mockData.flag.alt);
    expect(img).toHaveAttribute("src", mockData.flag.png);
    });
