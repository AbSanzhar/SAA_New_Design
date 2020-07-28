import {
    AlignmentType,
    Document,
    Footer,
    Paragraph, Tab,
    Table,
    TableCell,
    TableRow,
    TextRun,
    VerticalAlign,
    VerticalMergeType,
    WidthType
} from 'docx';

export class DocumentCreator {

    public create(AcadMet, ComWorkResearch, BudgetResearch, OrgMetAct, EduSocials, PlamPerfomances): Document {
        const document = new Document();

        document.addSection({
            footers: {
                default: new Footer({
                    children: [
                        new Paragraph({
                            thematicBreak: true
                        }),
                        new Paragraph({
                            children: [new TextRun({
                                text: 'F-28, I-01, 31.10.2013',
                                italics: true
                            }),
                            ],
                            alignment: AlignmentType.LEFT
                        }),
                    ],
                }),
            },
            children: [
                new Paragraph({
                    children: [new TextRun({
                        text: '1. Оқу- әдістеме жұмысы / Учебно-методическая работа/Academic and methodological activities',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Table({
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    verticalMerge: VerticalMergeType.RESTART,
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Рет',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'саны',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '№п.п',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '№',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })

                                    ],
                                }),
                                new TableCell({
                                    rowSpan: 2,
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жұмыс аталуы, орындалу мерзімі',
                                                size: 20,
                                                bold: true,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Наименование работ, срок выполнения',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Activities, time frame',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    columnSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жұмыс көлемі',
                                                size: 20,
                                                bold: true,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Объем работы',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '(сағат / часы)',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Workload',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '(hrs)',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })
                                    ],
                                }),
                            ],
                        }),

                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [],
                                    verticalMerge: VerticalMergeType.CONTINUE
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жоспардың',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'орындалу уақыты',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Срок  выполения ',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'плана',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Time frame',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })

                                    ],
                                }),

                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жоспардың',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'орындалуы',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Фактическое',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'выполнение плана',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Implementation',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })

                                    ],
                                }),
                            ],
                        }),
                        ...this.createAcadMetRows(AcadMet),
                        new TableRow({
                            children: [
                                new TableCell({
                                    columnSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Барлығы             Всего Total ',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),

                            ],
                        }),

                    ],
                    width: {
                        size: 100,
                        type: WidthType.PERCENTAGE,
                    }
                }),

                new Paragraph({
                    children: [new TextRun({
                        text: '',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [new TextRun({
                        text: '',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [new TextRun({
                        text: '',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Paragraph({
                    children: [new TextRun({
                        text: '2. Ғылыми жұмыс /  Научная работа/  Research activities ',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Paragraph({
                    children: [new TextRun({
                        text: '2.1.тапсырыс бойынша, грант, ғылыми стипендия және т.б. – заказные, гранты, научные стипендии и др.',
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [new TextRun({
                        text: 'Commissioned work, grants, research scholarships etc',
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Table({
                    width: {
                        size: 100,
                        type: WidthType.PERCENTAGE,
                    },
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    verticalAlign: VerticalAlign.CENTER,
                                    verticalMerge: VerticalMergeType.RESTART,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Рет',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'саны',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '№п.п',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '№',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })

                                    ],
                                }),
                                new TableCell({
                                    verticalAlign: VerticalAlign.CENTER,
                                    rowSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жұмыс аталуы',
                                                size: 20,
                                                bold: true,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Наименование работ',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Activities',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    rowSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жұмыс',
                                                size: 20,
                                                bold: true,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'көлемі',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Объем',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'работы',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '(тыс. тенге)',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Output',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '(thousand ',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'tenge)',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),

                                    ],
                                }),
                                new TableCell({
                                    columnSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Қатысу үлесі',
                                                size: 20,
                                                bold: true,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Доля участия, %',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Participation share, %',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                    ],
                                }),
                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [],
                                    verticalMerge: VerticalMergeType.CONTINUE
                                }),
                                new TableCell({
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'жоспар',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'план',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Plan',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),

                                    ],
                                }),

                                new TableCell({
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'орындалуы',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'выполнение',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Implementation ',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),

                                    ],
                                }),
                            ],
                        }),

                        ...this.createComWorkResearchRows(ComWorkResearch),


                        new TableRow({
                            children: [
                                new TableCell({
                                    columnSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Барлығы             Всего Total ',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),

                            ],
                        }),

                    ]}),

                new Paragraph({
                    children: [new TextRun({
                        text: '',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [new TextRun({
                        text: '2.2. Бюджеттік ҒЗЖ және СҒЗЖ жетекшілік ету - бюджетные НИР и руководство НИРС',
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [new TextRun({
                        text: 'Budget research activities and supervision of students’ research activities',
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),


                new Table({
                    width: {
                        size: 100,
                        type: WidthType.PERCENTAGE,
                    },
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    verticalAlign: VerticalAlign.CENTER,
                                    verticalMerge: VerticalMergeType.RESTART,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '№',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })

                                    ],
                                }),
                                new TableCell({
                                    verticalAlign: VerticalAlign.CENTER,
                                    rowSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жұмыс аталуы',
                                                size: 20,
                                                bold: true,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Наименование работ',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Activities',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    columnSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жұмыс көлемі',
                                                size: 20,
                                                bold: true,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Объем работы',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Output',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),

                                    ],
                                }),
                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [],
                                    verticalMerge: VerticalMergeType.CONTINUE
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'жоспар',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'план',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Plan',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),

                                    ],
                                }),

                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'орындалуы',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'выполнение',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Implementation ',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),

                                    ],
                                }),
                            ],
                        }),
                        ...this.createBudgetReasearch(BudgetResearch),

                        new TableRow({
                            children: [
                                new TableCell({
                                    columnSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Барлығы             Всего Total ',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),

                            ],
                        }),

                    ]}),

                new Paragraph(''),

                new Paragraph({
                    children: [new TextRun({
                        text: '3. Әдістеме-ұйымдастыру жұмысы / Организационно-методическая работа',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Paragraph({
                    children: [new TextRun({
                        text: 'Organizational and methodological activities',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Table({
                    width: {
                        size: 100,
                        type: WidthType.PERCENTAGE,
                    },
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    verticalAlign: VerticalAlign.CENTER,
                                    verticalMerge: VerticalMergeType.RESTART,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Рет',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'саны',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '№п.п',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '№',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })

                                    ],
                                }),
                                new TableCell({
                                    verticalAlign: VerticalAlign.CENTER,
                                    rowSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жұмыс аталуы',
                                                size: 20,
                                                bold: true,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Наименование работ',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Activities',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    columnSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жұмыс көлемі',
                                                size: 20,
                                                bold: true,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Объем работы',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Output',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),

                                    ],
                                }),
                            ],
                        }),


                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [],
                                    verticalMerge: VerticalMergeType.CONTINUE
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'жоспар',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'план',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Plan',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),

                                    ],
                                }),

                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'орындалуы',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'выполнение',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Implementation ',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),

                                    ],
                                }),
                            ],
                        }),

                        ...this.createOrgMetAct(OrgMetAct),

                        new TableRow({
                            children: [
                                new TableCell({
                                    columnSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Барлығы             Всего Total ',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),

                            ],
                        }),

                    ]}),

                new Paragraph(''),

                new Paragraph({
                    children: [new TextRun({
                        text: '4. Тәрбие, кәсіби бағдар беру жұмысы, қоғамдық жұмыс, кабинеттерді жабдықтау,ақылы қызмет ',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Paragraph({
                    children: [new TextRun({
                        text: 'көрсету, біліктілігін көтеру жұмысы.',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Paragraph({
                    children: [new TextRun({
                        text: 'Воспитательная, профориентационная, общественная работа, работа по оказанию платных услуг,',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Paragraph({
                    children: [new TextRun({
                        text: 'оборудованию кабинетов, повышению квалификации',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Paragraph({
                    children: [new TextRun({
                        text: 'Educational and social work,vocational guidance, paid services, classroom maintenance, professional ',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),

                new Paragraph({
                    children: [new TextRun({
                        text: 'development',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),


                new Table({
                    width: {
                        size: 100,
                        type: WidthType.PERCENTAGE,
                    },
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Рет',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'саны',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '№п.п',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '№',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                    bold: true
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })

                                    ],
                                }),
                                new TableCell({
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жұмыс аталуы',
                                                size: 20,
                                                bold: true,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Наименование работ',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Activities',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                    ],
                                }),

                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Орындау',
                                                size: 20,
                                                bold: true,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'туралы',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'мәлімет',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Сведения о',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'выполнении',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Implementation',
                                                    size: 20,
                                                    bold: true,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),



                                    ],
                                }),
                            ],
                        }),
                        ...this.createEduSocialRows(EduSocials)

                    ]}),

                new Paragraph(''),
                new Paragraph({
                    children: [new TextRun({
                        text: 'Оқытушының колы (подпись преподавателя) Teacher’s signature__________________________',
                        bold: true,
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                }),
                new Paragraph(''),
                new Paragraph(''),
                new Paragraph({
                    children: [new TextRun({
                        text: 'Кафедра мәжілісінде қарастырылды (рассмотрено на заседании кафедры)',
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                }),
                new Paragraph({
                    children: [new TextRun({
                        text: 'Reviewed at the meeting of the Department',
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                }),
                new Paragraph({
                    children: [new TextRun({
                        text: '№____хаттама (протокол) Minutes №. __  dated «______»___________________20___ж.(г.)',
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                }),
                new Paragraph(''),
                new Paragraph({
                    children: [new TextRun({
                        text: 'Кафедра меңгерушісі (зав. кафедрой) Head of Department   ___________________________',
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                }),
                new Paragraph(''),
                new Paragraph({
                    children: [new TextRun({
                        text: 'АЖ факультет деканы/Декан факультета /Faculty Dean____________________________',
                        size: 24,
                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                }),

                new Paragraph({
                    children: [new TextRun({
                        text: 'Оқытушының ДЖЖ орындау қорытындысы',
                        size: 24,
                        bold: true,

                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    pageBreakBefore: true,
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [new TextRun({
                        text: 'Итоги выполнения ИПП преподавателя',
                        size: 24,
                        bold: true,

                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [new TextRun({
                        text: 'The teacher’s individual plan performance',
                        size: 24,
                        bold: true,

                        font: {
                            name: 'Times New Roman',
                        },
                        color: 'black'
                    }),
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Table({
                    width: {
                        size: 100,
                        type: WidthType.PERCENTAGE,
                    },
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Рет',
                                                    size: 24,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'саны',
                                                    size: 24,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '№п.п',
                                                    size: 24,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Жұмыс аталуы',
                                                size: 24,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Наименование работ',
                                                    size: 24,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Activities',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                    ],
                                }),

                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Орындау',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Выполение',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Implementation',
                                                    size: 20,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),





                                    ],
                                }),
                            ],
                        }),
                        ...this.createPlanPerfomanceRows(PlamPerfomances),
                        new TableRow({
                            children: [
                                new TableCell({
                                    columnSpan: 2,
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Барлығы             Всего Total ',
                                                size: 20,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black',
                                                bold: true
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),

                                    ],
                                }),

                            ],
                        }),
                    ]}),

                new Paragraph(''),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: 'Оқу әдістемелік жұмыс және академиялық мәсілелер департаментінің директоры',
                            size: 24,
                            bold: true,
                            font: {
                                name: 'Times New Roman',
                            },
                            color: 'black'
                        }),
                    ],
                    alignment: AlignmentType.LEFT
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: '(Директор департамента по учебно-методической работе и академическим вопросам) ',
                            size: 24,
                            bold: true,
                            font: {
                                name: 'Times New Roman',
                            },
                            color: 'black'
                        }),
                    ],
                    alignment: AlignmentType.LEFT
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: 'Head of the Department of Academic and Methodological Guidance',
                            size: 24,
                            bold: true,
                            font: {
                                name: 'Times New Roman',
                            },
                            color: 'black'
                        }),
                    ],
                    alignment: AlignmentType.LEFT
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: '__________ Рахимбаева Г.Р./ G.R. Rakhimbayeva ',
                            size: 24,
                            font: {
                                name: 'Times New Roman',
                            },
                            color: 'black'
                        }),
                    ],
                    alignment: AlignmentType.LEFT
                }),
                new Paragraph(''),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: 'Head of the Department of Academic and Methodological Guidance',
                            size: 24,
                            font: {
                                name: 'Times New Roman',
                            },
                            color: 'black'
                        }),
                    ],
                    alignment: AlignmentType.LEFT
                }),
                new Paragraph(''),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: 'Ғылыми әдістемелік кеңесінде қарастырылды (рассмотрено на заседании НМС)',
                            size: 24,
                            font: {
                                name: 'Times New Roman',
                            },
                            color: 'black'
                        }),
                    ],
                    alignment: AlignmentType.LEFT
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: 'Reviewed at the meeting of SMC',
                            size: 24,
                            font: {
                                name: 'Times New Roman',
                            },
                            color: 'black'
                        }),
                    ],
                    alignment: AlignmentType.LEFT
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: '№____хаттама (протокол) Minutes №. __  dated «______»___________________20___ж.(г.)',
                            size: 24,
                            font: {
                                name: 'Times New Roman',
                            },
                            color: 'black'
                        }),
                    ],
                    alignment: AlignmentType.LEFT
                }),
                new Paragraph(''),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: 'ҒӘК төрағасы (председатель НМС) ___________________________ Ускенбаева Р.К. /R.K. Uskenbayeva',
                            size: 24,
                            font: {
                                name: 'Times New Roman',
                            },
                            color: 'black'
                        }),
                    ],
                    alignment: AlignmentType.LEFT
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: 'Head of the IITU SMC, Vice-Rector for Academic Affairs and science,',
                            size: 24,
                            font: {
                                name: 'Times New Roman',
                            },
                            color: 'black'
                        }),
                    ],
                    alignment: AlignmentType.LEFT
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: 'Dr. of Engineering Sciences, Professor',
                            size: 24,
                            font: {
                                name: 'Times New Roman',
                            },
                            color: 'black'
                        }),
                    ],
                    alignment: AlignmentType.LEFT
                }),
            ]
        });

        return document;
    }

    public createAcadMetRows(AcadMet): TableRow[] {
        return AcadMet.map((AcadMeth) => new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `${AcadMeth.acId}`,
                                        size: 24,
                                        font: {
                                            name: 'Times New Roman',
                                        },
                                        color: 'black',
                                    }),
                                ],
                                alignment: AlignmentType.LEFT
                            })

                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `${AcadMeth.activities}`,
                                        size: 24,
                                        font: {
                                            name: 'Times New Roman',
                                        },
                                        color: 'black'
                                    }),
                                ],
                                alignment: AlignmentType.LEFT
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `${AcadMeth.timeFrame}`,
                                        size: 24,
                                        font: {
                                            name: 'Times New Roman',
                                        },
                                        color: 'black'
                                    }),
                                ],
                                alignment: AlignmentType.LEFT
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `${AcadMeth.implementation}`,
                                        size: 24,
                                        font: {
                                            name: 'Times New Roman',
                                        },
                                        color: 'black'
                                    }),
                                ],
                                alignment: AlignmentType.LEFT
                            }),
                        ],
                    }),
                ]
        }));
    }

    public createComWorkResearchRows(Research): TableRow[] {
        return Research.map((comWorkResearch) => new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${comWorkResearch.commId}`,
                                    size: 24,
                                    font: {
                                        name: 'Times New Roman',
                                    },
                                    color: 'black',
                                }),
                            ],
                            alignment: AlignmentType.LEFT
                        })

                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${comWorkResearch.activities}`,
                                    size: 24,
                                    font: {
                                        name: 'Times New Roman',
                                    },
                                    color: 'black'
                                }),
                            ],
                            alignment: AlignmentType.LEFT
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${comWorkResearch.output}`,
                                    size: 24,
                                    font: {
                                        name: 'Times New Roman',
                                    },
                                    color: 'black'
                                }),
                            ],
                            alignment: AlignmentType.LEFT
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${comWorkResearch.plan}`,
                                    size: 24,
                                    font: {
                                        name: 'Times New Roman',
                                    },
                                    color: 'black'
                                }),
                            ],
                            alignment: AlignmentType.LEFT
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${comWorkResearch.implementation}`,
                                    size: 24,
                                    font: {
                                        name: 'Times New Roman',
                                    },
                                    color: 'black'
                                }),
                            ],
                            alignment: AlignmentType.LEFT
                        }),
                    ],
                }),
            ]
        }));
    }

    public createBudgetReasearch(BudgetResearch): TableRow[] {
        return BudgetResearch.map((budget) => new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${budget.budId}`,
                                    size: 24,
                                    font: {
                                        name: 'Times New Roman',
                                    },
                                    color: 'black',
                                }),
                            ],
                            alignment: AlignmentType.LEFT
                        })

                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${budget.activities}`,
                                    size: 24,
                                    font: {
                                        name: 'Times New Roman',
                                    },
                                    color: 'black'
                                }),
                            ],
                            alignment: AlignmentType.LEFT
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${budget.plan}`,
                                    size: 24,
                                    font: {
                                        name: 'Times New Roman',
                                    },
                                    color: 'black'
                                }),
                            ],
                            alignment: AlignmentType.LEFT
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${budget.implementation}`,
                                    size: 24,
                                    font: {
                                        name: 'Times New Roman',
                                    },
                                    color: 'black'
                                }),
                            ],
                            alignment: AlignmentType.LEFT
                        }),
                    ],
                }),
            ]
        }));
    }

    public createOrgMetAct(orgMetAct): TableRow[] {
        return orgMetAct.map((orgMetActivity) => new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${orgMetActivity.orgId}`,
                                    size: 24,
                                    font: {
                                        name: 'Times New Roman',
                                    },
                                    color: 'black',
                                }),
                            ],
                            alignment: AlignmentType.LEFT
                        })

                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${orgMetActivity.activities}`,
                                    size: 24,
                                    font: {
                                        name: 'Times New Roman',
                                    },
                                    color: 'black'
                                }),
                            ],
                            alignment: AlignmentType.LEFT
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${orgMetActivity.plan}`,
                                    size: 24,
                                    font: {
                                        name: 'Times New Roman',
                                    },
                                    color: 'black'
                                }),
                            ],
                            alignment: AlignmentType.LEFT
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${orgMetActivity.implementation}`,
                                    size: 24,
                                    font: {
                                        name: 'Times New Roman',
                                    },
                                    color: 'black'
                                }),
                            ],
                            alignment: AlignmentType.LEFT
                        }),
                    ],
                }),
            ]
        }));
    }

    public createEduSocialRows(eduSocial): TableRow[] {
        return eduSocial.map((eduSocialActivity) => new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${eduSocialActivity.eduId}`,
                                    size: 24,
                                    font: {
                                        name: 'Times New Roman',
                                    },
                                    color: 'black',
                                }),
                            ],
                            alignment: AlignmentType.LEFT
                        })

                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${eduSocialActivity.activities}`,
                                    size: 24,
                                    font: {
                                        name: 'Times New Roman',
                                    },
                                    color: 'black'
                                }),
                            ],
                            alignment: AlignmentType.LEFT
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${eduSocialActivity.implementation}`,
                                    size: 24,
                                    font: {
                                        name: 'Times New Roman',
                                    },
                                    color: 'black'
                                }),
                            ],
                            alignment: AlignmentType.LEFT
                        }),
                    ],
                }),
            ]
        }));
    }

    public createPlanPerfomanceRows(planPerfomance): TableRow[] {
        return planPerfomance.map((ppElement) => new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${ppElement.ppId}`,
                                    size: 24,
                                    font: {
                                        name: 'Times New Roman',
                                    },
                                    color: 'black',
                                }),
                            ],
                            alignment: AlignmentType.LEFT
                        })

                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${ppElement.activities}`,
                                    size: 24,
                                    font: {
                                        name: 'Times New Roman',
                                    },
                                    color: 'black'
                                }),
                            ],
                            alignment: AlignmentType.LEFT
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${ppElement.implementation}`,
                                    size: 24,
                                    font: {
                                        name: 'Times New Roman',
                                    },
                                    color: 'black'
                                }),
                            ],
                            alignment: AlignmentType.LEFT
                        }),
                    ],
                }),
            ]
        }));
    }

}
