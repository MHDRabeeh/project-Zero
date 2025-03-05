import { Drawer, Form, Select, Input, Button, DatePicker } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetFilter } from "../features/issueSlice";

const { Option } = Select;

const FilterDrawer = ({ isOpen, onClose, onApplyFilters }) => {
    const dispatch = useDispatch()
    const [filters, setFilters] = useState({
        ticketNo: "",
        client: "",
        region: "",
        classification: "",
        handledBy: "",
        assignedTo: "",
        status: "",
        date: null, // Store as a moment object or null
    });

    const handleApplyFilters = () => {
        // Convert the moment object to a string before passing to onApplyFilters
        const filtersToApply = {
            ...filters,
            date: filters.date ? filters.date.format("YYYY-MM-DD") : null, // Format the date as a string
        };
        onApplyFilters(filtersToApply);
        onClose();
    };
    const clients = ['Client A', 'Client B', 'Client C'];
    const regions = ['Region 1', 'Region 2', 'Region 3', "Prod"];
    const issue = ["Ram(dev)"]


    return (
        <Drawer title="Filter Issues" placement="right" width={350} onClose={onClose} open={isOpen}>
            <Form layout="vertical">
                <Form.Item label="Ticket No">
                    <Input
                        placeholder="Enter ticket number"
                        value={filters.ticketNo}
                        onChange={(e) => setFilters({ ...filters, ticketNo: e.target.value })}
                    />
                </Form.Item>

                <Form.Item label="Client">
                    <Select
                        showSearch
                        placeholder="Select a client"
                        value={filters.client}
                        onChange={(value) => setFilters({ ...filters, client: value })}
                        options={clients.map(client => ({ value: client, label: client }))}
                        allowClear
                    />
                </Form.Item>

                <Form.Item label="Region">
                    <Select
                        showSearch
                        placeholder="Select a region"
                        value={filters.region}
                        onChange={(value) => setFilters({ ...filters, region: value })}
                        options={regions.map(region => ({ value: region, label: region }))}
                        allowClear
                    />
                </Form.Item>

                <Form.Item label="Issue Classification">
                    <Input
                        placeholder="Enter classification"
                        value={filters.classification}
                        onChange={(e) => setFilters({ ...filters, classification: e.target.value })}
                    />
                </Form.Item>

                <Form.Item label="Shift Handled By">
                    <Input
                        placeholder="Enter handler"
                        value={filters.handledBy}
                        onChange={(e) => setFilters({ ...filters, handledBy: e.target.value })}
                    />
                </Form.Item>

                <Form.Item label="Issue Assigned To">
                    {/* <Input
                        placeholder="Enter assignee"
                        value={filters.assignedTo}
                        onChange={(e) => setFilters({ ...filters, assignedTo: e.target.value })}
                    /> */}
                    <Select
                        value={filters.assignedTo}
                        placeholder="select Assigned to"
                        onChange={(value) => setFilters({ ...filters, assignedTo: value })}
                    >
                        <Option value="ram">Ram (dev)</Option>
                        <Option value="shamil">shamil(dev)</Option>
                        <Option value="john">john(admin)</Option>
                        <Option value="Rahul">Rahul(member)</Option>
                        <Option value="syed">syed(dev)</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Status">
                    <Select
                        value={filters.status}
                        onChange={(value) => setFilters({ ...filters, status: value })}
                    >
                        <Option value="">All</Option>
                        <Option value="pending">Pending</Option>
                        <Option value="resolved">Resolved</Option>
                        <Option value="Working on this">Working on this</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Date">
                    <DatePicker
                        style={{ width: "100%" }}
                        value={filters.date} // Expects a moment object or null
                        onChange={(date) => setFilters({ ...filters, date: date })} // date is a moment object or null
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" onClick={handleApplyFilters}>
                        Apply Filters
                    </Button>
                    <Button
                        style={{ marginLeft: 8 }}
                        onClick={() =>
                            setFilters({
                                ticketNo: "",
                                client: "",
                                region: "",
                                classification: "",
                                handledBy: "",
                                assignedTo: "",
                                status: "",
                                date: null, // Reset to null
                            }, dispatch(resetFilter()))
                        }
                    >
                        Reset
                    </Button>
                </Form.Item>
            </Form>
        </Drawer>
    );
};

export default FilterDrawer;