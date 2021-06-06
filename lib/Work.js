// Write code to define and export the Work history class
class Work {
    constructor(title, company, dates, duties) {
    this.title = title;
    this.company = company;
    this.dates = dates;
    this.duties = duties
    }

    getTitle() {
        return this.title;
    }
    getCompany() {
        return this.company;
    }
    getDates() {
        return this.dates;
    }
    getDuties() {
        return this.duties;
    }
};
module.exports = Work;