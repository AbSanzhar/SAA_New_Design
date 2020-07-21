import {AlignmentType, Document, Paragraph, Table, TableCell, TableRow, TabStopPosition, TabStopType, TextRun} from 'docx';

export class ScienceListGenerator {
    public create(name): Document {
        const document = new Document();
        document.addSection({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({
                            text: 'Образец',
                            size: 24,
                            font: {
                                name: 'Times New Roman',
                            },
                        }),
                    ],
                    // heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: 'МЕЖДУНАРОДНЫЙ  УНИВЕРСИТЕТ ИНФОРМАЦИОННЫХ ТЕХНОЛОГИЙ',
                            size: 24,
                            font: {
                                name: 'Times New Roman',
                            },
                        }),
                    ],
                    // heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: 'Список ',
                            size: 24,
                            font: {
                                name: 'Times New Roman',
                            },
                        }),
                    ],
                    // heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: 'опубликованных научных и методических трудов ___________________________',
                            size: 24,
                            font: {
                                name: 'Times New Roman',
                            },
                        }),
                    ],
                    // heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: '(ф.и.о. автора)',
                            size: 24,
                            font: {
                                name: 'Times New Roman',
                            },
                        }),
                    ],
                    // heading: HeadingLevel.HEADING_1,
                    alignment: AlignmentType.RIGHT
                }),
                new Table({
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '',
                                                    size: 12,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                        })],

                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Наименование',
                                                size: 24,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Характер работы',
                                                size: 24,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Соавтор',
                                                size: 24,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    })],
                                }),
                            ],
                        }),
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '1.',
                                                    size: 24,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })],
                                    margins: {
                                        top: 0,
                                        bottom: 0,
                                        left: 150,
                                        right: 150,
                                    },
                                }),
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Название публикации, статьи или работы// ',
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
                                                    text: 'Название издания. – город: издательство, год – стр.',
                                                    size: 24,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.LEFT
                                        })],
                                    margins: {
                                        top: 0,
                                        bottom: 0,
                                        left: 150,
                                        right: 150,
                                    },
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'печатная',
                                                size: 24,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    })],
                                    margins: {
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                    },
                                }),
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'ФИО соавтора',
                                                    size: 24,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.LEFT
                                        })],
                                    margins: {
                                        top: 0,
                                        bottom: 0,
                                        left: 150,
                                        right: 150,
                                    },
                                }),
                            ],
                        }),
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '2.',
                                                    size: 24,
                                                    font: {
                                                        name: 'Times New Roman',
                                                    },
                                                    color: 'black'
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 24,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'печатная',
                                                size: 24,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    })],
                                }),
                                new TableCell({
                                    children: [new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                size: 24,
                                                font: {
                                                    name: 'Times New Roman',
                                                },
                                                color: 'black'
                                            }),
                                        ],
                                        alignment: AlignmentType.LEFT
                                    })],
                                }),
                            ],
                        }),
                    ],
                }),
                new Paragraph({
                    children: [
                        new TextRun('\tАвтор\t\t'),
                        new TextRun('\t__________________    '),
                        new TextRun(
                            '\t' + `${name}` +
                            's/\\n/\\n\\n/g(ф.и.о. автора)'
                        )
                    ],
                    tabStops: [
                        {
                            type: TabStopType.RIGHT,
                            position: TabStopPosition[Symbol.hasInstance],
                        }
                    ],
                    spacing: {
                        before: 300,
                        after: 300
                    }
                }),
                new Paragraph({
                    children: [
                        new TextRun('\tПроректор по науке\t'),
                        new TextRun('__________________    '),
                    ],
                    tabStops: [
                        {
                            type: TabStopType.RIGHT,
                            position: TabStopPosition[Symbol.hasInstance],
                        }
                    ]
                }),
            ],
        });
        return document;
    }
}
