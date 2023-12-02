import { ReactNode, createContext, useContext, useState } from "react"
import { User } from "../../core/user/User"
import { Advertising } from "../../core/ads/Advertising";

interface UserContextType {
    user: User | undefined;
    login: (userData: User) => void;
    logout: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | undefined>(undefined);

    const login = (userData: User | undefined) => {
        if (userData === undefined) {
            logout();
            return;
        }
        setUser(userData);
    };

    const logout = () => {
        setUser(undefined);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
};


interface AdsContextType {
    ads: Advertising[];
    uploadAd: (ad: Advertising) => void;
    removeAd: (ad: Advertising) => void;
}

export const AdsContext = createContext<AdsContextType | null>(null);

export const AdsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [ads, setAds] = useState<Advertising[]>(new Array<Advertising>());

    //HACK: MANUALLY ADDED
    ads.push(new Advertising("GoodWill", "Explore second-hand clothing and home items at unbeatable prices", "https://www.goodwill.org/", "https://logos-download.com/wp-content/uploads/2018/04/Goodwill_logo_industries-1.png"));
    ads.push(new Advertising("GoodRx", "Save on prescriptions, vaccinations, and Telehealth services", "https://www.goodrx.com/go/homepage-lander-sem-7-tl-2?optly_audience=%7bnextbestaction%7d&kw=price&utm_campaign=140564372&utm_content=1521923620&utm_source=bing&utm_medium=cpc&utm_term=kwd-29266226660:loc-71124&&msclkid=2937478d81f41b2c87c322ea1d169447&utm_source=bing&utm_medium=cpc&utm_campaign=brand&utm_term=goodrx&utm_content=goodrx&gclid=2937478d81f41b2c87c322ea1d169447&gclsrc=3p.ds&ajs_event=Experiment%20Viewed&ajs_prop_experiment_name=NFD%20Promo%20Drawer&ajs_prop_variation_name=Variation_1&ajs_prop_path=/go/homepage-lander-sem-7-tl-2&ajs_aid=3749666ebf0d4e6fb071f3ccf9b1ee43", "https://mms.businesswire.com/media/20210615006229/en/885537/5/GoodRx_logo_yellow_background.jpg"))
    ads.push(new Advertising("Depop", "Buy, sell, and discover unique fashion", "https://www.depop.com/", "https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/db/69/bc/db69bc87-101d-289d-c103-7ae90ac60719/source/1280x1280bb.jpg"));
    ads.push(new Advertising("Sam’s Club", "Wholesale prices of top brands", "https://samsclub.com/", "https://clipartcraft.com/images/sams-club-logo-march-1.png"));
    ads.push(new Advertising("Honey", "Find promo codes for online shopping savings", "https://www.topuscoupons.com/coupons/honey?us=b_k_66001052_001_honey%20app_e_c&u_m=482611552_1231454009618390_76966005331202&msclkid=899c052b2da4154715c7604cb2771df8", "https://townsquare.media/site/29/files/2020/07/Honey-Logo.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89"));
    ads.push(new Advertising("Amazon Cyber Monday", "Discover Cyber monday offers with amazing prices!", "https://www.amazon.com/", "https://www.gamespot.com/a/uploads/screen_kubrick/1595/15950357/3610061-best-amazon-deals-cyber-monday-2019-promo12.jpg"));
    ads.push(new Advertising("UNiDAYS", "Find great deals on items exclusively for students", "https://www.myunidays.com/US/en-US", "https://thecollegiatelive.com/wp-content/uploads/2018/04/UNiDAYS.jpg"));
    ads.push(new Advertising("Groupon", "Find local deals near you", "https://www.groupon.com/", "https://logodix.com/logo/43744.jpg"));
    ads.push(new Advertising("Raise", "Find discounted coupons for your favorite stores", "https://www.raise.com/", "https://dollarsprout.com/wp-content/uploads/2019/01/Raise-Logo.jpg"));
    ads.push(new Advertising("The Krazy Coupon Lady", "Find coupons for your favorite brands and stores", "https://thekrazycouponlady.com/", "http://is1.mzstatic.com/image/pf/us/r30/Purple1/v4/bd/5a/6e/bd5a6ebb-fefc-3cbc-d069-cedf9238c2d4/pr_source.png"));
    ads.push(new Advertising("Poshmark", "Buy and sell luxury items", "https://poshmark.com/", "https://www.eseller365.com/wp-content/uploads/2021/01/poshmark-logo-women-shopping-background-1024x683.jpg"));
    ads.push(new Advertising("Uptown Cheapskate", "Buy, sell, and discover unique fashion", "https://www.uptowncheapskate.com/", "https://uptowncheapskatetampa.com/wp-content/uploads/2019/03/Uptown-Cheapskate-Tampa-Logo-Mobilex2.png"));
    ads.push(new Advertising("Costco Wholesale", "Buy, sell, and discover unique fashion", "https://www.costco.com/", "https://logos-world.net/wp-content/uploads/2020/11/Costco-Wholesale-Emblem.png"));
    ads.push(new Advertising("Aldi", "Save on your favorite groceries and home essentials", "https://www.aldi.us/", "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_r0h53v2l/def_height/2700/def_width/2700/version/100012/type/1"));
    ads.push(new Advertising("Lidl", "Find affordable groceries and home essentials", "https://www.lidl.com/", "https://logos-download.com/wp-content/uploads/2016/03/Lidl_logo.png"));
    ads.push(new Advertising("Feeding America", "Struggling to afford groceries? Find a food bank near you", "https://www.feedingamerica.org/find-your-local-foodbank", "https://mma.prnewswire.com/media/126271/feeding_america_logo.jpg?p=publish"));
    ads.push(new Advertising("FleaMarketZone", "Find local shops and markets for amazingly unique and affordable items", "https://fleamarketzone.com/", "https://ww1.prweb.com/prfiles/2012/08/22/10672866/FleaMarket%20logo.jpg"));


    const uploadAd = (adData: Advertising | undefined) => {
        if (adData === undefined) {
            return;
        }
        ads.push(adData);
    };

    const removeAd = (adData: Advertising | undefined) => {
        if (adData === undefined) {
            return;
        }
        let index = ads?.findIndex((ad) => ad !== adData);

        if (index !== undefined && index > 0)
            ads.at(index);
    };

    return (
        <AdsContext.Provider value={{ ads, uploadAd, removeAd }}>
            {children}
        </AdsContext.Provider>
    );
};

export const useAds = (): AdsContextType => {
    const context = useContext(AdsContext);
    if (!context) {
        throw new Error('useAds must be used within a AdsProvider');
    }

    return context;
};