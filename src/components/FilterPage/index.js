import React from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Menu from "./components/Menu";
import Table from "./components/Table";
import TopButtons from "./components/Others/TopButtons";
import TimeSelect from "./components/Others/TimeSelect";
import ModalCustom from "./components/Others/ModalCustom";
import {
    getCurrentTable,
    getColumnsNamesAndTypes,
    getAllOptions,
    getDefaultColumnsNames,
} from "./actions";

class FilterPage extends React.Component {
    componentDidMount() {
        this.props.getColumnsNamesAndTypes();
        this.props.getAllOptions();
        this.props.getCurrentTable();
        this.props.getDefaultColumnsNames();
    }

    componentDidUpdate() {
        this.props.getAllOptions();
        this.props.getCurrentTable();
    }

    render() {
        return (
            <div>
                <Grid item container>
                    <Grid item xs={3}>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            sx={{
                                height: 80,
                                m: 2,
                            }}
                        >
                            <TimeSelect />
                        </Box>
                        <Box
                            sx={{
                                height: 800,
                                m: 2,
                            }}
                        >
                            <Menu />
                        </Box>
                    </Grid>
                    <Grid item xs={9}>
                        <Box
                            sx={{
                                height: 40,
                                m: 2,
                            }}
                        >
                            <TopButtons />
                        </Box>
                        <Box
                            sx={{
                                height: 800,
                                m: 2,
                            }}
                        >
                            <Table />
                        </Box>
                    </Grid>
                </Grid>
                <ModalCustom
                    status={this.props.modal_status}
                    content={this.props.modal_content_type}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentParams: state.params,
        currentRowPerPage: state.row,
        currentPage: state.page,
        currentTime: state.date,
        modal_status: state.modal_status,
        modal_content_type: state.modal_content,
    };
};

export default connect(mapStateToProps, {
    getCurrentTable,
    getColumnsNamesAndTypes,
    getAllOptions,
    getDefaultColumnsNames,
})(FilterPage);