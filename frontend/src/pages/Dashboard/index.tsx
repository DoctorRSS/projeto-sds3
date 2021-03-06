import BarChart from "components/barChart";
import DataTable from "components/dataTable";
import DonutChart from "components/donutChart";
import Footer from "components/footer";
import NavBar from "components/navbar";

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">DashBoard de Vendas</h1>
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
                        <DonutChart />
                    </div>

                    <div className="py-3">
                        <h2 className="text-primary">Todas Vendas</h2>
                    </div>

                </div>

                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;