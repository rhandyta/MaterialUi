import "./App.css";

// import MuiButton from "./components/MuiButton";
// import MuiTypography from "./components/MuiTypography";
// import MuiTextField from "./components/MuiTextField";
// import MuiSelect from "./components/MuiSelect";
// import MuiRadio from "./components/MuiRadio";
// import MuiCheckbox from "./components/MuiCheckbox";
// import MuiSwitch from "./components/MuiSwitch";
// import MuiRating from "./components/MuiRating";
// import MuiAutocomplete from "./components/MuiAutocomplete";
// import MuiLayout from "./components/MuLayout";
// import MuiCard from "./components/MuiCard";
// import MuiAccordin from "./components/MuiAccordin";
// import MuiImagelist from "./components/MuiImagelist";
import MuiNavbar from "./components/MuiNavbar";
// import MuiLink from "./components/MuiLink";
// import MuiBreadCrumbs from "./components/MuiBreadCrumbs";
// import MuiDrawer from "./components/MuiDrawer";
// import MuiSpeedDial from "./components/MuiSpeedDial";
// import MuiBottomNavigation from "./components/MuiBottomNavigation";
// import MuiAvatar from "./components/MuiAvatar";
// import MuiBadge from "./components/MuiBadge";
// import MuiList from "./components/MuiList";
// import MuiChip from "./components/MuiChip";
// import Tooltip from "./components/MuiTooltip";
// import MuiTable from "./components/MuiTable";
// import MuiAlert from "./components/MuiAlert";
// import MuiSnackbar from "./components/MuiSnackbar";
// import MuiDialog from "./components/MuiDialog";
// import MuiProgress from "./components/MuiProgress";
// import MuiSkeleton from "./components/MuiSkeleton";
// import MuiLoadingButton from "./components/MuiLoadingButton";
// import MuiDatePicker from "./components/MuiDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import MuiDateRangePicker from "./components/MuiDateRangePicker";
import MuiTabs from "./components/MuiTabs";

function App() {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MuiNavbar />
                <div className="App">
                    {/* <MuiTypography /> */}
                    {/* <MuiButton /> */}
                    {/* <MuiTextField /> */}
                    {/* <MuiSelect /> */}
                    {/* <MuiRadio /> */}
                    {/* <MuiCheckbox /> */}
                    {/* <MuiSwitch /> */}
                    {/* <MuiRating /> */}
                    {/* <MuiAutocomplete /> */}
                    {/* <MuiLayout /> */}
                    {/* <MuiCard /> */}
                    {/* <MuiAccordin /> */}
                    {/* <MuiImagelist /> */}

                    {/* <MuiLink /> */}
                    {/* <MuiBreadCrumbs /> */}
                    {/* <MuiDrawer /> */}
                    {/* <MuiSpeedDial /> */}
                    {/* <MuiBottomNavigation /> */}
                    {/* <MuiAvatar /> */}
                    {/* <MuiBadge /> */}
                    {/* <MuiList /> */}
                    {/* <MuiChip /> */}
                    {/* <Tooltip /> */}
                    {/* <MuiTable /> */}
                    {/* <MuiAlert /> */}
                    {/* <MuiSnackbar /> */}
                    {/* <MuiDialog /> */}
                    {/* <MuiProgress /> */}
                    {/* <MuiSkeleton /> */}
                    {/* <MuiLoadingButton /> */}
                    {/* <MuiDatePicker /> */}
                    {/* <MuiDateRangePicker /> */}
                    <MuiTabs />
                </div>
            </LocalizationProvider>
        </>
    );
}

export default App;
